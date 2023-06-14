Git

Pasos para utilizar Git 

1. Instalación de Git:
    
    - Descarga e instala Git desde el sitio web oficial: https://git-scm.com/downloads
    - Sigue las instrucciones del instalador para completar la instalación en tu sistema operativo.

2. Configuración inicial:
    
    - Abre una terminal o consola de comandos.    
    - Configura tu nombre de usuario ejecutando el siguiente comando:
        git config --global user.name "Tu Nombre"
    
    - Configura tu dirección de correo electrónico ejecutando el siguiente comando:
        git config --global user.email "tu@email.com"

3. Iniciar un repositorio:
    
    - Navega hasta el directorio de tu proyecto en la terminal.
    - Ejecuta el siguiente comando para iniciar un repositorio Git en ese directorio:
        git init

4. Realizar seguimiento de archivos:
    
    - Agrega los archivos que deseas incluir en el repositorio ejecutando el siguiente comando:
        git add nombre_archivo
    
    - Si quieres agregar todos los archivos en el directorio actual y sus subdirectorios, puedes ejecutar:
        git add .

5. Realizar commits:
    
    - Realiza un commit para guardar los cambios en el repositorio:
        git commit -m "Mensaje descriptivo del commit"

6. Trabajar con ramas:
    
    - Crea una nueva rama para trabajar en paralelo con la rama principal (por lo general, llamada "master"):
        git branch nombre_rama
    
    - Cambia a la nueva rama ejecutando el siguiente comando:
        git checkout nombre_rama

7. Sincronización remota:
    
    - Conecta tu repositorio local a un repositorio remoto (por ejemplo, GitHub) ejecutando:
        git remote add origin URL_repositorio_remoto
    
    - Envía tus commits al repositorio remoto:
        git push -u origin nombre_rama

8. Actualización del repositorio:
    
    - Actualiza tu repositorio local con los cambios realizados en el repositorio remoto:
        git pull origin nombre_rama

9. Otros comandos útiles:
    
    - Ver el estado actual del repositorio:
        git status
    
    - Ver el historial de commits:
        git log
    
    - Deshacer cambios no guardados:
        git checkout -- nombre_archivo

10. Clonar un repositorio existente de GitHub:

    - Ve a la página del repositorio en GitHub que deseas clonar.
    
    - Copia la URL del repositorio.

    - En VSCode, selecciona "Clonar repositorio" en la barra lateral izquierda o usa el comando "Git: Clonar" desde el menú de comandos (Ctrl + Shift + P).

    - Pega la URL del repositorio y selecciona la ubicación donde deseas clonarlo en tu computadora.

    - Selecciona "Abrir" para abrir el repositorio clonado en VSCode. 
