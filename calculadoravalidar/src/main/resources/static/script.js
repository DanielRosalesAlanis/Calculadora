document.addEventListener('DOMContentLoaded', function() {
    const numero1 = document.getElementById('numero1');
    const numero2 = document.getElementById('numero2');
    const opBtns = document.querySelectorAll('.op-btn');
    const calcularBtn = document.getElementById('calcular');
    const resultado = document.getElementById('resultado');
    let operacionSeleccionada = '';

    // Selección de operación
    opBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            opBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            operacionSeleccionada = btn.dataset.op;
        });
    });

    // Botón calcular
    calcularBtn.addEventListener('click', function() {
        const num1 = parseFloat(numero1.value);
        const num2 = parseFloat(numero2.value);

        // Validaciones básicas
        if (isNaN(num1) || isNaN(num2)) {
            resultado.textContent = 'Error: Ingresa números válidos';
            resultado.className = 'resultado error';
            return;
        }

        if (!operacionSeleccionada) {
            resultado.textContent = 'Error: Selecciona una operación';
            resultado.className = 'resultado error';
            return;
        }

        if (operacionSeleccionada === '/' && num2 === 0) {
            resultado.textContent = 'Error: División por cero';
            resultado.className = 'resultado error';
            return;
        }

        // Calcular resultado
        let res;
        switch(operacionSeleccionada) {
            case '+':
                res = num1 + num2;
                break;
            case '-':
                res = num1 - num2;
                break;
            case '*':
                res = num1 * num2;
                break;
            case '/':
                res = num1 / num2;
                break;
        }

        resultado.textContent = res;
        resultado.className = 'resultado success';
    });
});