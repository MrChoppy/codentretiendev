<!DOCTYPE html>
<html>
    <head>
      <meta http-equiv="Content-Type" content="text/html; charset= <?php echo $charset; ?>"/>
		<!-- Style import -->
		<link rel="stylesheet" type="text/css" media="screen" href="<?php echo base_url()?>assets/css/style.css">
		<?php foreach ($css as $url): ?>
				<link rel="stylesheet" type="text/css" media="screen" href='<?php echo $url ?>'/>
		<?php endforeach; ?>
		<!-- Js import-->
		<?php foreach ($js as $url):?>
				<script type="text/javascript" src="<?php echo $url; ?>"></script>
		<?php endforeach ?>

    <script type="text/javascript" src="<?php echo base_url() ?>assets/js/jquery-3.2.1.min.js"></script>
    <script type="text/javascript" src="<?php echo base_url() ?>assets/js/styleFix.js"></script>

      <title><?php echo $titre; ?></title>
	 	 <noscript>
			<div id="noscript"> Cette page requiert l'activation de Javascript </div>
		</noscript>
    </head>

    <body>

        <header>
          <div id ="titre">
          <!--  <img id="header_img" src="<?php //echo base_url()?>/assets/images/header.png" alt="logo"> <!--<h1 id="header_title"> MANITA </h1>-->
          </div>
<?php if(isset($this->session->userdata['logged_in'])){ ?>
       <div id="user_info">
        <div id="user">
          <a href="#"><p id="user_hello"><img id="user_profil" src="<?php echo base_url()?>/assets/images/user_icon.png" alt="login"> <?php echo $this->session->userdata['logged_in']['firstname']?> <?php echo $this->session->userdata['logged_in']['lastname']." "; ?></p></a>
        </div>
        <div id="logout">
          <a href="<?php echo base_url() ?>/login/logout"> <p> Se déconnecter </p> </a>
        </div>
      </div>
        </header>
        <div id="bordure">
          <div id="menu">
            <a href="<?php echo base_url() ?>home"><div class="onglets"><p>ACCUEIL</p></div></a>
            <?php if($this->permission->user_as_permission($this->userID, 101)){?>
              <a href="<?php echo base_url() ?>createticket"><div class="onglets"><p>FAIRE UNE DEMANDE</p></div></a>
            <?php } ?>
            <a href="<?php echo base_url() ?>ticketmanagement"><div class="onglets"><p>GESTION BILLETS</p></div></a>
            <a href="<?php echo base_url() ?>agentmanagement"><div class="onglets"><p>GESTION DES AGENTS</p></div></a>
            <?php if($this->permission->user_as_permission($this->userID, 1)){?>
              <a href="<?php echo base_url()?>administration"><div class="onglets"><p>GESTION UTILISATEURS</p></div></a>
            <?php } ?>
            <a href="<?php echo base_url()?>groupmanagement"><div class="onglets"><p>GESTION GROUPES</p></div></a>
            <a href="<?php echo base_url() ?>history"><div class="onglets"><p>HISTORIQUE</p></div></a>
            <a href="<?php echo base_url() ?>settings"><div class="onglets"><p>PARAMETRES</p></div></a>
            <a href="<?php echo base_url() ?>help"><div class="onglets"><p>AIDE</p></div></a>
          </div>
        </div>
  		<?php }?>

        <div id="content">
			<?php echo $output;?>
		</div>
       <div id="copyright">
         <p>MANITA - Maxence Chauvet - Nicolas KLEIN - Tayfun Yilmaz</p>
       </div>
