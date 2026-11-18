
const form = document.getElementById("chat-form");
const input = document.getElementById("user-input");
const messages = document.getElementById("messages");

function addMessage(text, type) {
    const message = document.createElement("div");

    message.classList.add("message", type);
    message.textContent = text;

    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
}

function getResponse(question) {
    const text = question.toLowerCase();

    if (text.includes("oi") || text.includes("olá") || text.includes("ola")) {
        return "Olá! Seja bem-vindo(a)! 💜 Estou aqui para ajudar você a explorar suas possibilidades profissionais.";
    }

    if (text.includes("profiss") || text.includes("carreira")) {
        return "Existem muitas profissões interessantes! Algumas opções são:\n\n• Ciências Contábeis\n• Administração\n• Direito\n• Medicina\n• Engenharia\n• Tecnologia da Informação\n• Medicina Veterinária\n\nQual dessas áreas desperta sua curiosidade?";
    }

    if (text.includes("matemática") || text.includes("matematica") || text.includes("números")) {
        return "Se você gosta de matemática, pode explorar áreas como Ciências Contábeis, Engenharia, Economia, Estatística e Tecnologia. Essas profissões utilizam raciocínio lógico e cálculos!";
    }

    if (text.includes("animais") || text.includes("veterinária")) {
        return "Se você gosta de animais, Medicina Veterinária pode ser uma opção interessante! Também existem áreas como Zootecnia e Biologia.";
    }

    if (text.includes("tecnologia") || text.includes("computador") || text.includes("programação")) {
        return "A tecnologia oferece muitas possibilidades! Você pode conhecer profissões como desenvolvedor de software, analista de sistemas, cientista de dados e especialista em segurança digital.";
    }

    if (text.includes("curso") || text.includes("faculdade")) {
        return "Escolher um curso exige conhecer seus interesses e objetivos. Algumas opções são:\n\n• Ciências Contábeis\n• Administração\n• Direito\n• Psicologia\n• Engenharia\n• Enfermagem\n\nQuer saber mais sobre algum deles?";
    }

    if (text.includes("contábeis") || text.includes("contabilidade")) {
        return "Ciências Contábeis é um curso superior que estuda patrimônio, finanças, impostos e registros contábeis. Quem se forma pode trabalhar em empresas, escritórios de contabilidade e áreas financeiras.";
    }

    if (text.includes("dinheiro") || text.includes("salário") || text.includes("salario")) {
        return "Os salários variam conforme a profissão, a região, a experiência e a especialização. O ideal é pesquisar a realidade da carreira que você deseja seguir, sem escolher apenas pelo salário.";
    }

    if (text.includes("obrigado") || text.includes("obrigada")) {
        return "Por nada! 💜 Estou aqui para ajudar você a conhecer novas possibilidades!";
    }

    return "Que interessante! Para ajudar você melhor, me conte um pouco mais sobre seus interesses. Você gosta de números, tecnologia, animais, saúde, educação, negócios ou outra área?";
}

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const question = input.value.trim();

    if (question === "") {
        return;
    }

    addMessage(question, "user");

    input.value = "";

    setTimeout(function() {
        const response = getResponse(question);
        addMessage(response, "bot");
    }, 500);
});

function quickMessage(text) {
    input.value = text;
    form.requestSubmit();
}
