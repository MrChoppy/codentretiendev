<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class CreateTicket extends CI_Controller{

	public function __construct(){
		parent::__construct();
		$this->userID = 0;
		$this->rooms = $this->read_database->get_rooms();
		$this->permissions = $this->read_database->get_permissions();
		$this->layout->set_titre("MANITA - Création de ticket");
		if(isset($this->session->userdata['logged_in'])){
			$this->userID = $this->session->userdata['logged_in']['id'];
		}
	}

  public function index(){
			if($this->permission->user_as_permission($this->userID, 101)){
				$this->layout->view('createticket/index');

			}else{
				$this->layout->view('shared/permission_denied');
			}
		}

	public function createTicket()
	{
		$title 		= htmlspecialchars($_POST["ticket_title"]);
		$room 		= htmlspecialchars($_POST["ticket_room"]);
		$details 	= htmlspecialchars($_POST["ticket_details"]);
	}
}
?>
