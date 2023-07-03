import { Server } from 'socket.io';

export function createWebSocketServer(server) {
	const io = new Server(server, {
		/* Configurações adicionais do socket.io, se necessário */
	});

	io.on('connection', (socket) => {
		console.log('Nova conexão WebSocket:', socket.id);

		/* Lógica para lidar com eventos de socket, como 'message', 'disconnect', etc. */
	});
}
