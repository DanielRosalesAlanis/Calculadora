package com.example.calculadoravalidar;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class CalculatorController {

    @GetMapping("/calculadora")
    public String calcular(
            @RequestParam double a,
            @RequestParam double b,
            @RequestParam String operacion
    ) {

        String resultado;

        switch (operacion) {
            case "suma":
                resultado = "Resultado: " + (a + b);
                break;

            case "resta":
                resultado = "Resultado: " + (a - b);
                break;

            case "multiplicar":
                resultado = "Resultado: " + (a * b);
                break;

            case "dividir":
                if (b == 0) {
                    resultado = "Error: No se puede dividir entre 0";
                } else {
                    resultado = "Resultado: " + (a / b);
                }
                break;

            default:
                resultado = "Operación no válida";
        }

        return "<!DOCTYPE html>\n" +
                "<html lang='es'>\n" +
                "<head>\n" +
                "    <meta charset='UTF-8'>\n" +
                "    <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n" +
                "    <title>Calculadora</title>\n" +
                "    <link rel='stylesheet' href='styles.css'>\n" +
                "</head>\n" +
                "<body>\n" +
                "<div class='container'>\n" +
                "    <h1>Calculadora Spring Boot</h1>\n" +
                "    <div class='resultado'>" + resultado + "</div>\n" +
                "    <a class='btn' href='calculadora.html'>Volver</a>\n" +
                "</div>\n" +
                "</body>\n" +
                "</html>";
    }
}
