from fastapi import FastAPI, WebSocket, WebSocketDisconnect

app = FastAPI()

#health check point
@app.get("/")
def read_root():
    return {'status' : "Split AI backend is running"}

#websocket stub placeholder
@app.websocket("/ws/{client_id}")
async def websocket_endpoint(websocket:WebSocket, client_id: int):
    await websocket.accept()
    try:
        while True:
            data = await websocket.receive_text()
            await websocket.send_text(f"Message text was : {data}")
    except WebSocketDisconnect:
        print(f"Client #{client_id} disconnected")