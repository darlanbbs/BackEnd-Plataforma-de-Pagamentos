CREATE DATABASE paymentsapp
-- APÓS CRIAR O BANCO DE DADOS CRIE AS TABELAS A SEGUIR:



-- TABELA DE USUARIOS
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL UNIQUE,
    senha VARCHAR(255) NOT NULL
);

-- TABELA DE SALDOS
CREATE TABLE saldos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    valor_inicial DECIMAL(10, 2) NOT NULL,
    valor_utilizado DECIMAL(10, 2) DEFAULT 0.00,
    valor_restante DECIMAL(10, 2) DEFAULT valor_inicial,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- TABELA DE PAGAMENTOS
CREATE TABLE pagamentos (
    id SERIAL PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    descricao TEXT,
    valor DECIMAL(10, 2) NOT NULL,
    
    saldo_id INT REFERENCES saldos(id) ON DELETE CASCADE,
  	usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE
);

-- TABELA DE PAGAMENTOS DOS USUARIOS
CREATE TABLE pagamentos_usuarios (
    pagamento_id INT REFERENCES pagamentos(id) ON DELETE CASCADE,
    usuario_id INT REFERENCES usuarios(id) ON DELETE CASCADE,
    PRIMARY KEY (pagamento_id, usuario_id)
);
