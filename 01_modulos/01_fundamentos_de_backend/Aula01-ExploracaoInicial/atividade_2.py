import math
import sys
import os


def main():
    # criacao do diretorio atividade1 no /tmp
    directory = '/tmp/atividade1'
    os.makedirs(directory, exist_ok=True)

    # lendo entrada do usuario (stdin)
    name = input('Digite seu nome: ')

    # escrevendo saida (stdout)
    print(f'Olá, {name}! Bem-vindo o curso de programação básica de backend.\n')
    # gerando um erro (stderr)

    try:
        num = int(input('Digite um número: '))
        print(f'O dobro  de {num} é:', math.pow(num, 2))
    except ValueError:
        # escrevendo mensagem de erro (stderr)
        error_message = 'Error: Você deve digitar um número válido.\n'
        sys.stderr.write(error_message)

        # salvando mensagem de erro em um arquivo
        error_file = os.path.join(directory, 'error.txt')
        with open(error_file, 'w') as f:
            f.write(error_message)

        # encerra programa com codigo de erro 1
        sys.exit(1)


if __name__ == "__main__":
    main()
