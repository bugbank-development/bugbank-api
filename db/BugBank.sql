CREATE TABLE tblClientes (
  idCliente INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  nome VARCHAR(200) NULL,
  email VARCHAR(200) NULL,
  cpf VARCHAR(20) NULL,
  endereco VARCHAR(200) NULL,
  cep VARCHAR(50) NULL,
  PRIMARY KEY(idCliente)
);

CREATE TABLE tblLogin (
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  login VARCHAR(20) NULL,
  senha VARCHAR(20) NULL,
  dataExpiracaoSenha VARCHAR(20) NULL,
  INDEX tblLogin_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE tblSaque (
  idSaque INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  valor DECIMAL(10,2) NULL,
  dataSaque VARCHAR(20) NULL,
  horaSaque VARCHAR(20) NULL,
  PRIMARY KEY(idSaque),
  INDEX tblSaque_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE tblTransferencia (
  idTransferencia INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  clienteDestino INTEGER UNSIGNED NULL,
  valorTransferencia DECIMAL(10,2) NULL,
  dataTransferencia VARCHAR(20) NULL,
  horaTransferencia VARCHAR(20) NULL,
  PRIMARY KEY(idTransferencia),
  INDEX tblTransferencia_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE tblEmprestimo (
  idEmprestimo INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  valor DECIMAL(10,2) NULL,
  dataEmprestimo VARCHAR(20) NULL,
  horaEmprestimo VARCHAR(20) NULL,
  PRIMARY KEY(idEmprestimo),
  INDEX tblEmprestimo_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE tblCartao (
  idCartao INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  numeroCartao VARCHAR(50) NULL,
  cvv VARCHAR(3) NULL,
  validade VARCHAR(15) NULL,
  tipoCartao VARCHAR(50) NULL,
  PRIMARY KEY(idCartao),
  INDEX tblCartao_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE tblContas (
  idContas INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  numeroConta VARCHAR(20) NULL,
  saldo DECIMAL(10,2) NULL,
  dataAbertura VARCHAR(20) NULL,
  limite DECIMAL(10,2) NULL,
  PRIMARY KEY(idContas),
  INDEX tblContas_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);

CREATE TABLE tblDeposito (
  idDeposito INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
  tblClientes_idCliente INTEGER UNSIGNED NOT NULL,
  valor DECIMAL(10,2) NULL,
  dataDeposito VARCHAR(20) NULL,
  horaDeposito VARCHAR(20) NULL,
  PRIMARY KEY(idDeposito),
  INDEX tblDeposito_FKIndex1(tblClientes_idCliente),
  FOREIGN KEY(tblClientes_idCliente)
    REFERENCES tblClientes(idCliente)
      ON DELETE NO ACTION
      ON UPDATE NO ACTION
);


