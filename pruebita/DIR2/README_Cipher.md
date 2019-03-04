# Cifrado César

Cifrar significa codificar. El [cifrado César](https://en.wikipedia.org/wiki/Caesar_cipher) es uno de los primeros métodos de cifrado conocidos. El emperador romano Julio César lo usaba para enviar órdenes secretas a sus generales en los campos de batalla.

![caeser-cipher](https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Caesar3.svg/2000px-Caesar3.svg.png)

El cifrado césar es una de las técnicas más simples para cifrar un mensaje. Es un tipo de cifrado por sustitución, es decir que cada letra del texto original es reemplazada por otra que se encuentra un número fijo de posiciones (desplazamiento) más adelante en el mismo alfabeto.

Por ejemplo, si usamos un desplazamiento (_offset_) de 3 posiciones:

- La letra A se cifra como D.
- La palabra CASA se cifra como FDVD.
- Alfabeto sin cifrar: A B C D E F G H I J K L M N O P Q R S T U V W X Y Z
- Alfabeto cifrado: D E F G H I J K L M N O P Q R S T U V W X Y Z A B C

# Problematica

Muchas empresas de alta seguridad desean guardar informacion confidencial y que solo sus personales autorizados tengan acceso a ella, hay muchas formas de guardar con seguridad dicha informacion, pero nosotros nos enfocaremos en cifrar, descifrar y guardarla en texto plano, mediante el cifrado Cesar.

En la actualidad, todos los cifrados de sustitución simple se descifran con mucha facilidad y, aunque en la práctica no ofrecen mucha seguridad en la comunicación por sí mismos; el cifrado César sí puede formar parte de sistemas más complejos de codificación, como el cifrado Vigenère, e incluso tiene aplicación en el sistema ROT13.

# Solución del Problema

- Se creo una aplicación que permitira al usuario escribir de manera manual ó cargando un archivo de texto plano el texto a Cifrar/Descifrar.

# Objetivo del Producto

- Permite al usuario encriptar o desencriptar texto o archivo plano en codigo Cesar.

# Usuarios del producto

- Empresas o Usuarios que deseen guardar información de sus archivos de texto plano cifrado en Cesar.
- Empresas o Usuarios que deseen saber el descifrado en Cesar del contenido de un archivo en texto plano.
- Empresas o Usuarios que de forma manual escriban el texto a cifrar en Cesar.
- Empresas o Usuarios que de forma manual escriban el texto a descifrar en Cesar.

# Instalacion
- No hay Instalación solo debe dirigirse al siguiente [Enlace](https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/)

# ¿Cómo usar el producto?

- La primera pantalla muestra las instrucciones de la aplicacion.
- Si seguimos los pasos estos serian del siguiente modo:
1. Si abrimos la aplicación la primera pantalla se visualiza las instrucciones de uso de la aplicación, como se ve en la siguiente imagen.

![Pantalla de Inicio.](https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/imagen1.png)

2. Ingrese el Texto a Cifrar/Descifrar y el Offset, el Offset es por defecto un número este sera nuestro número de identificación con el que Descifraremos/Cifraremos codigo Cesar en las casillas en blanco, luego de ello seleccionar la opción que desee hacer Cifrar/Descifrar.

![Ingreso de texto y Offset](https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/imagen2.png)

Esta imagen nos muestra un ejemplo de como usar la aplicación, en el se muestra el Cifrado del Texto ingresado.

3. En caso que se desee enviar la informacion desde un texto plano, tendra que seleccionar el botón que se encuentra en la parte inferior de la pantalla y subir su archivo .txt que contenga la información a Cifrar/Descifrar.

![Ingreso de archivo ".txt"](https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/imagen3.png)

Al darle Click en "abrir", podremos observar que la información del texto plano se traslado a nuestra caja de Texto como lo muestra la siguiente imagen:

![Información trasladada a la caja de texto".txt"](https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/imagen4.png)

4. Al igual que el paso 2, debemos de ingresarle el Offset y decirle si queremos Cifrar/Descifrar.

![Información de Texto Cifrado ingresado desde un archivo](https://jackelinperez.github.io/lim-2018-11-bc-core-am-cipher/src/imagen5.png)

# Conclusión

Por medio de esta aplicación muchas Empresas o Usuarios podran guardar documentos con mucha seguridad, sin necesidad de ser violentados ya que ellos manejan la Información del número de identificación u Offset.
