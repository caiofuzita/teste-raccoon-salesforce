SELECT
D.Nome as 'Nome',
SUM(F.Salário) as 'Valor da folha de pagamento'
FROM Departamentos D
INNER JOIN Funcionários F
ON F.CodigoDepartamento = D.Codigo
GROUP BY D.Codigo
ORDER BY D.Nome