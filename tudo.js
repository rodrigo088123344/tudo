// Classe FiguraGeometrica
class FiguraGeometrica {
    constructor(base, altura) {
      this.base = base;
      this.altura = altura;
    }
  }
  
  // Classe Retangulo herda de FiguraGeometrica
  class Retangulo extends FiguraGeometrica {
    calcularArea() {
      return this.base * this.altura;
    }
  }
  
  // Classe Circulo herda de FiguraGeometrica
  class Circulo extends FiguraGeometrica {
    constructor(raio) {
      super();
      this.raio = raio;
    }
  
    calcularArea() {
      return Math.PI * this.raio ** 2;
    }
  }
  
  // Programa para criar um objeto Retangulo e calcular a área
  const retangulo = new Retangulo(10, 20);
  console.log("Área do Retângulo:", retangulo.calcularArea());
  
  // Programa para criar um objeto Círculo e calcular a área
  const circulo = new Circulo(5);
  console.log("Área do Círculo:", circulo.calcularArea());
  
  // Classe Animal
  class Animal {
    constructor(nome, especie) {
      this.nome = nome;
      this.especie = especie;
    }
  }
  
  // Classe Cachorro herda de Animal
  class Cachorro extends Animal {
    latir() {
      console.log(`${this.nome} está latindo: Woof! Woof!`);
    }
  }
  
  // Classe Gato herda de Animal
  class Gato extends Animal {
    miar() {
      console.log(`${this.nome} está miando: Miau! Miau!`);
    }
  }
  
  // Programa para criar um objeto Cachorro e fazê-lo latir
  const cachorro = new Cachorro("Totó", "Cachorro");
  cachorro.latir();
  
  // Programa para criar um objeto Gato e fazê-lo miar
  const gato = new Gato("Miaú", "Gato");
  gato.miar();
  