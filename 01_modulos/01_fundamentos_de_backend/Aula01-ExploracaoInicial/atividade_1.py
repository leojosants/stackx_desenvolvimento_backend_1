import math
import sys


def main():
    # lendo entrada do usuario (stdin)
    name = input('Digite seu nome: ')

    # escrendo saida (stdout)
    print(f'Olá, {name}! Bem-vindo o curso de programação básica de backend.\n')

    # gerando um erro (stderr)
    try:
        num = int(input('Digite um número: '))
        print(f'O dobro  de {num} é:', math.pow(num, 2))
    except ValueError:
        # gerando um erro (stderr)
        sys.stderr.write('Error: Você deve digitar um número válido.\n')

        # encerra programa com codigo de erro 1
        sys.exit(1)


if __name__ == "__main__":
    main()
