# parcial-pruebas
# Todoist
## Estrategia de pruebas
* El tiempo estimado para la realización de las pruebas, que se podrán ejecutar en varias ocasiones para revisar regresiones es de 8 horas, las cuales serán divididas así:
 - 3 horas de formulario, login y registro con Cucumber
 - 3 horas de pruebas e2e con las funcionalidades más importantes y verficando que manejen volumen de tareas
 - 2 horas para random testing teniendo en cuenta el tiempo de ejecución
 
## Funcionalidades a probar

* Registro y todas sus posibles opciones, como campos en blanco, usuarios ya registrados, entre otros.
* Diferentes tipos de inicio de sesión
* Crear tareas de distintas maneras (Lenguaje natural o haciendo uso de los widgets)
* Completar tareas
* Recuperar tareas perdidas
* Crear projectos
* Crear gran volumen de pruebas

### Tipos y niveles de pruebas
Pruebas BDT, e2e y random testing.

### Reporte

La aplicación crasheo dos veces con las pruebas de volumen.
En las pruebas random salio este error:
<br>
![](images/crash1)
<br>
En las pruebas e2e cuando se realizó el recuperar tareas y completarlas mil veces en la número 700 la aplicación dejó de funcionar, seguramente por problemas de RAM:
<br>
![](images/crash2)
<br>
Las pruebas BDD resultaron sumamente satisfactorias ya que tienen buenos procedimientos de verificación.
Las pruebas e2e en pequeños volumenes fueron satisfactorias, se probaron 9 funcionalidades acorde a la estrategia de pruebas.
<br>
![](images/e2e)
<br>

## RedReader
### Estrategia de pruebas
* El tiempo estimado de las pruebas exploratorias será de alrededor de 6 horas, tres en cada una de las aplicaciones (limpia y modificada) con el fin de poder analizar las funcionalidades tanto correctas y encontrar una estrategia de pruebas más fiables.
* Realizar pruebas BDT sobre la aplicación tomara 2 horas completas teniendo en cuenta el arreglo de dependencias en el curso.
* El dispositivo con el que se probará esta aplicación será Motorola Moto One 4GB de RAM y un procesador Snapdragon 625 2GHz, junto con un computador Asus Pro B9440UA con procesador Intel Core i7 y 16GB de RAM.
* Se utilizará calabash y bundle con el fin de poder ejecutar las pruebas BDT sobre la aplicación.
### Funcionalidades a probar
* Sección de cuenta
* Sección de tema
* Ver subreddits suscritos
* Ir a la página principal
* Ir a todos los subreddits
* Ir al about de la aplicación
* Observar novedades de la apliación
* Fijar subreddits en la pantalla de inicio de la app
* Eliminar de la pantalla de inicio un subreddit fijado.
### Tipos y niveles de prueba
Las pruebas realizadas serán BDT y serán de aceptación y del sistema.
### Bugs encontrados
* Existe una diferencia en la interfaz de la aplicación, el borde no corresponde al de la aplicación limpia.
* La opción de temas corresponde a la funcionalidad de opción cuenta.
* No funciona la opción de cuentas.
* La opción de Página principal redirige a todos los subreddits.
* Al ingresar a la opción de novedades la aplicación falla y se crashea.
* En el home no exista la posibilidad de fijar el subreddit en el home.
* Quitar del menú principal no es posible en un subreddit fijado.
* En la sección de About el orden presentado no concuerda con el original.
* No se encuentran subreddits en la pantalla de home.
* La opción de todos los subreddits dirige a la página principal.


En el siguiente link se puede encontrar las pruebas positivas https://youtu.be/E-OrIE3NO_o <br>
En el siguiente link se puede encontrar las pruebas en la app modificada https://youtu.be/duRv5XGsStc
