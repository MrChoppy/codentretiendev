<!--<link rel="stylesheet" type="text/css" media="screen" href="http://localhost:9090/codentretien/assets/css/global.css"> -->
<?php 
$username = ($this->session->userdata['logged_in']['username']);
$email = ($this->session->userdata['logged_in']['email']);
?>

<p> Bonjour <?php echo $username?>  bienvenue sur Manita, votre email est <?php echo $email ?></p>
<br>
<b id="logout"><a href="<?php echo base_url() ?>login/logout">Logout</a></b>
<?php 
$id = ($this->session->userdata['logged_in']['id']);
if($this->permission->user_as_permission($id, 1)){
?>
<a href="<?php echo base_url() ?>administration"> Administration</a>

<?php 
}
?>