#!/bin/bash

SSID_OBJETIVO="Taller_Electronica" # Cambia esto por el SSID específico
IP=""

# Obtener la conexión activa para el SSID específico
CONEXION=$(nmcli -t -f NAME,DEVICE con show --active | grep "^$SSID_OBJETIVO" | cut -d':' -f2)

if [ -n "$CONEXION" ]; then
  # Obtener la IP de la interfaz conectada
  IP=$(nmcli -t -f IP4.ADDRESS dev show "$CONEXION" | grep -oP '(?<=IP4\.ADDRESS\[1\]:)[^\s]+')
  echo "La IP de $SSID_OBJETIVO es: $IP"
else
  echo "No se encontró conexión activa para el SSID '$SSID_OBJETIVO'."
fi

/home/colegio/Documentos/Hidroponia-Project/Code/Raspberry Pi Code || exit

flask run --$IP --port=5001
