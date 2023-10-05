import express from 'express';
import path from 'path';
import http from 'http';
import { Server, Socket } from 'socket.io';
import mongoose from 'mongoose';
import Message from './src/models/message.model';

interface CustomSocket extends Socket {
    username?: string;
}

const app = express();
const server = http.createServer(app);
const io = new Server(server);

mongoose.connect('mongodb://localhost:27017/chatdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as mongoose.ConnectOptions);
server.listen(3002);

app.use(express.static(path.join(__dirname, 'public')));

let connectedUsers: string[] = [];

io.on('connection', (socket: CustomSocket) => {
    console.log("Conexão detectada...");

    socket.on('join-request', async (username: string) => {
        socket.username = username;
        connectedUsers.push(username);
        console.log(connectedUsers);

        socket.emit('user-ok', connectedUsers);
        socket.broadcast.emit('list-update', {
            joined: username,
            list: connectedUsers
        });
    });

    socket.on('disconnect', () => {
        connectedUsers = connectedUsers.filter(u => u !== socket.username);
        console.log(connectedUsers);

        socket.broadcast.emit('list-update', {
            left: socket.username,
            list: connectedUsers
        });
    });

    socket.on('send-msg', async (txt: string) => {
        const messageData = {
            username: socket.username,
            message: txt,
          };

        socket.broadcast.emit('show-msg', messageData);

        try {
            const newMessage = new Message(messageData);
            console.log(newMessage);
            await newMessage.save();
        } catch (error) {
            console.error('Erro ao salvar mensagem no MongoDB:', error);
        }
    });
});


