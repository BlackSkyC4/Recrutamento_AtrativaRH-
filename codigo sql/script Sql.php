<?php
session_start();
include_once 'conexao.php';

USE `job`;
DROP procedure IF EXISTS `departamento`;
 
DELIMITER $$
USE `job`$$
CREATE DEFINER=`root`@`localhost` PROCEDURE `departamento`(
IN
DepID             INT,
email             INT,
NomeRes           VARCHAR(100),  
LoginRes             VARCHAR(100) 
)
BEGIN
 
UPDATE alunos as  a.NomeRes = NomeRes, a.email = email, a.dtcadastro = dtcadastro, a.LoginRes = LoginRes
           where a.DepID = DepID;
          
END;$$
 
DELIMITER ;

$SendCadCont = filter_input(INPUT_POST, 'SendCadCont', FILTER_SANITIZE_STRING);
if($SendCadCont){
    //Receber os dados do formulário
    $DepID = filter_input(INPUT_POST, 'DepID', FILTER_SANITIZE_STRING);
    $email = filter_input(INPUT_POST, 'email', FILTER_SANITIZE_STRING);
    $NomeRes = filter_input(INPUT_POST, 'NomeRes', FILTER_SANITIZE_STRING);
    $LoginRes = filter_input(INPUT_POST, 'LoginRes', FILTER_SANITIZE_STRING);
    
    //Inserir na BD
    $result_msg_cont = "INSERT INTO departamento (DepID, email, NomeRes, LoginRes) VALUES (:DepID, :email, :NomeRes, :LoginRes)";
    
    $insert_msg_cont = $conn->prepare($result_msg_cont);
    $insert_msg_cont->bindParam(':DepID', $DepID);
    $insert_msg_cont->bindParam(':email', $email);
    $insert_msg_cont->bindParam(':NomeRes', $NomeRes);
    $insert_msg_cont->bindParam(':LoginRes', $LoginRes);
    
    if($insert_msg_cont->execute()){
        $_SESSION['msg'] = "<p style='color:green;'>Mensagem enviada com sucesso</p>";
        header("Location: index.php");
    }else{
        $_SESSION['msg'] = "<p style='color:red;'>Mensagem não foi enviada com sucesso</p>";
        header("Location: index.php");
    }    
}else{
    $_SESSION['msg'] = "<p style='color:red;'>Mensagem não foi enviada com sucesso</p>";
    header("Location: index.php");
}