window.onload = function() {
    var altura = screen.availHeight;
    var anchura = screen.availWidth;
    var profcolor = screen.colorDepth;
    var paltura = screen.height;
    var panchura = screen.width;
    var navegador = navigator.appCodeName;
    var navegador2 = navigator.appName;
    var version = navigator.appVersion;
    var cookies = navigator.cookieEnabled;
    var java = navigator.javaEnabled();
    var userAgent = navigator.userAgent;
    var idioma = window.navigator.language;
    var idioma2 = window.navigator.languajeBrowser;
    var mime = window.navigator.mimeTypes;
    var so = window.navigator.platform;
    var plugins = window.navigator.plugins;
    var idiomaso = window.navigator.systemLanguage;
    var idiomapreferencia = window.navigator.userLanguage;



    document.write("<br><br> <b>Altura ventana:</b> "+altura);
    document.write("<br><br> <b>Anchura ventana:</b> "+anchura);
    document.write("<br><br> <b>Profunidad color:</b> "+profcolor+" bits");
    document.write("<br><br> <b>Resoluci&oacuten atura:</b> "+paltura);
    document.write("<br><br> <b>Resoluci&oacuten anchura:</b> "+panchura);
    document.write("<br><br> <b>Navegador:</b> "+navegador);
    document.write("<br><br> <b>Navegador2:</b> "+navegador2);
    document.write("<br><br> <b>Version:</b> "+version);
    document.write("<br><br> <b>Cookies:</b> "+cookies);
    document.write("<br><br> <b>Java:</b> "+java);
    document.write("<br><br> <b>userAgent:</b> "+userAgent);
    document.write("<br><br> <b>Idioma Navegador:</b> "+idioma);
    document.write("<br><br> <b>Idioma Navegador2:</b> "+idioma2);
    document.write("<br><br> <b>Idioma SO:</b> "+idiomaso);
    document.write("<br><br> <b>Idioma preferido usuario:</b> "+idiomapreferencia);
    document.write("<br><br> <b>Sistema operativo:</b> "+so);

    document.write("<hr>");
    for (elemento in mime) {
        document.write("<br><br> <b>Tipos mime Navegador "+elemento+" :</b> "+mime[elemento].description);
    };

    document.write("<hr>");
    for (elemento in plugins) {
        document.write("<br><br> <b>Plugins Navegador "+elemento+":</b> "+plugins[elemento].name+", "+plugins[elemento].filename+", "+plugins[elemento].description+", "+plugins[elemento].version);
    };

}