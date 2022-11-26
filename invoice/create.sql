drop table invoices.card_transaction;
create table invoices.card_transaction(
  card_number text,
  description text,
  amount numeric,
  currency text,
  date timestamp
);

insert into invoices.card_transaction(card_number,  description,  amount,  currency,  date) values ('1234', 'Mercado Livre', 100, 'BRL', '2022-11-01T10:00:00');
insert into invoices.card_transaction(card_number,  description,  amount,  currency,  date) values ('1234', 'Amazon', 300, 'USD', '2022-11-01T10:00:00');
insert into invoices.card_transaction(card_number,  description,  amount,  currency,  date) values ('1234', 'Americanas', 50, 'BRL', '2022-11-01T10:00:00');
insert into invoices.card_transaction(card_number,  description,  amount,  currency,  date) values ('1234', 'Extra', 1000, 'BRL', '2022-10-01T10:00:00');
insert into invoices.card_transaction(card_number,  description,  amount,  currency,  date) values ('1234', 'Google', 50, 'URL', '2022-10-01T10:00:00');