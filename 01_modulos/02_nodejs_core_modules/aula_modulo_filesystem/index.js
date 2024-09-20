import filesystem from 'fs';

const fileName = 'arquivo.txt';
const content = 'Hello World';

let result = null;

// cria arquivo e escreve conteudo dentro dele
filesystem.writeFileSync(fileName, content);

// ler o conteudo do arquivo
result = filesystem.readFileSync(fileName, 'utf-8');
console.log(result);

// adiciona conteudo na mesma linha dentro do arquivo
filesystem.appendFileSync(fileName, content);

// ler o conteudo do arquivo
result = filesystem.readFileSync(fileName, 'utf-8');
console.log(result);

// excluir arquivo
filesystem.unlinkSync(fileName);

// ler o conteudo do arquivo
result = filesystem.readFileSync(fileName, 'utf-8');
console.log(result);