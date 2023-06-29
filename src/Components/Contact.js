import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';

const Contact = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const openDialog = () => {
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
  };

  const sendEmail = () => {
    const emailAddress = 'votreadresseemail@example.com';
    const subject = 'QUESTIONS/SUGGESTIONS';
    const body = `Nom : ${name}\n\n${message}`;

    const mailtoUrl = `mailto:${emailAddress}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
    setEmail('');
    setName('');
    setMessage('');
    closeDialog();
  };

  return (
    <div id="contact">
      <center>
        <h1 className="primary-heading">Des questions vous viennent à l'esprit ?</h1>
        <h1 className="primary-heading">Laissez-nous vous aider</h1>
        <div className="contact-form-container">
          <input
            type="text"
            placeholder="Votre adresse e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="secondary-button"
            onClick={() => {
              if (email.trim() !== '') {
                openDialog();
              }
            }}
          >
            Soumettre
          </button>
        </div>
      </center>

      <Dialog open={isDialogOpen} onClose={closeDialog}>
        <DialogTitle>Composez votre message</DialogTitle>
        <DialogContent>
          <TextField
            label="Votre nom"
            value={name}
            onChange={(e) => setName(e.target.value)}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Contenu du message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            fullWidth
            margin="normal"
            multiline
            rows={4}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={sendEmail} variant="contained" color="primary">
            Envoyer
          </Button>
          <Button onClick={closeDialog} variant="contained" color="secondary">
            Annuler
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Contact;
