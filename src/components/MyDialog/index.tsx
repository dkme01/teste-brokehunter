import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  TextField,
  DialogActions,
  Button,
} from '@material-ui/core';

function MyDialog(props: any) {
  const [text, setText] = React.useState<string | null>(
    props.data.description || '',
  );

  return (
    <Dialog open={props.open} onClose={props.handleClose}>
      <DialogTitle>Nova Descrição</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Informe uma descrição para o item.
        </DialogContentText>
        <TextField
          autoFocus
          margin="dense"
          id="description"
          label="Descrição"
          fullWidth
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleClose} color="primary">
          Cancelar
        </Button>
        <Button
          onClick={() => {
            props.edit(props.data, text);
            props.handleClose();
          }}
          color="primary"
        >
          Confirmar
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default MyDialog;
