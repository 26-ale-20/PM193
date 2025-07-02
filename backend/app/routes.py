from fastapi import APIRouter #sistema de rutas 
from data import nombres #del data.py importo los nombres (datos)

router = APIRouter()#creamos un objeto para poder definir las rutas 
@router.get("/nombres")#definimos ruta (o endpoint) GET llamada nombres 
def get_nombre():#esto se ejecuta cuando alguien usa el /nombres
    return nombres #nos regresara la lista de nombres 

#sirve como buena practica para seleccionar las rutas que tenemos 
# y asi no amontonarnos todo en el main 