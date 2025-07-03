from fastapi import FastAPI #importacion de la clase prinicpal 
from fastapi.middleware.cors import CORSMiddleware 
from routes import router #importar las rutas de el archivo que routes.py

app = FastAPI() #creamos la app principal 

#creamos el filtro de seguridad 
app.add_middleware (
    CORSMiddleware,
    allow_origins=["*"],#permitimos las credenciales
    allow_credencials=True,#permitimos 
    allow_methods=["*"], #permitimos los encabezados
    allow_headers=["*"],
)

app.include_router(router)
#le decimos que use todas las rutas que se encuentran en el Router creado 
