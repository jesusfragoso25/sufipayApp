<style>
@import url('../../assets/css/filter.css');
</style>

<template>
    <div class="filtersBack">
        <div class="filters">
                <select id="documento">
                    <option id="placeholder" value="" disabled selected hidden>Tipo doc.</option>
                    <option value="cedula">Cédula de Ciudadanía</option>
                    <option value="cedulaE">Cédula de Extranjería</option>
                    <option value="pasaporte">Pasaporte</option>
                    <option value="tarjetaIdentidad">Tarjeta de Identidad</option>
                    <option value="registroCivil">Registro Civil</option>
                </select>
                <input type="text" id="numeroDocumento" placeholder="Numero de documento">
                <input type="text" id="numeroDesembolso" placeholder="Numero de desembolso"> 
                    <div class="fecha inputWithIcon">
                        <div class="imageC"></div>
                        <input class="input100" type="text" id="fechaInicial" placeholder="Desde">
                    </div>
                    <div class="fecha inputWithIcon">
                        <div class="imageC"></div>
                        <input class="input100" type="text" id="fechaFinal" placeholder="Hasta">
                    </div>
        </div>
    </div>
</template>