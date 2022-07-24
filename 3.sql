SELECT * FROM Departamentos D
INNER JOIN Funcionários F
ON F.CodigoDepartamento = D.Codigo
WHERE F.Funcao IN ("supervisor", "gerente")
ORDER BY D.Nome