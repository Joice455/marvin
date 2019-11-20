function maiusculo(palavra) {
    n = palavra.toUpperCase()
    return n.substr(0,3) + palavra.substr(3);
}