import { Grid, Typography } from '@material-ui/core';
import React, { PureComponent } from 'react';
import HeaderBar from '../../components/HeaderBar';
import { IMainProps, IMainState } from './types';
import { fakeData } from './fakeData';
import ItemsList from '../../components/ItemsList';
import { toast } from 'react-toastify';

const jsonData = fakeData;
class Main extends PureComponent<IMainProps, IMainState> {
  constructor(props: IMainProps) {
    super(props);
    this.state = {
      listaItens: [...jsonData],
    };
  }

  async componentDidMount() {
    const data = this.getData();
    console.log(data);
  }

  private getData = async () => {
    const data = await fetch(
      'http://homologacao.jaguarimobiliario.com.br/list',
      {
        method: 'GET',
        headers: {
          authorization: `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`,
        },
      },
    );
    if (data.status !== 200) {
      return;
    }

    return data;
  };

  private duplicate = (itemCopia: any) => {
    this.setState({
      listaItens: [
        ...this.state.listaItens,
        { ...itemCopia, name: `${itemCopia.name} (cópia)` },
      ],
    });
  };

  private getList = () =>
    this.setState({ listaItens: jsonData }, () => {
      toast.success('Itens listados');
      console.log(jsonData);
    });

  private delete = (itemDelete: any) => {
    console.log(itemDelete);
    this.setState(
      {
        listaItens: this.state.listaItens.filter(
          (item: any) => item.name !== itemDelete.name,
        ),
      },
      () => toast.success('Item excluido'),
    );
  };

  private edit = (itemEdit: any, text: string) => {
    console.log(itemEdit, text);
    this.setState(
      {
        listaItens: this.state.listaItens.map((item: any) => {
          if (itemEdit.name === item.name) {
            item.description = text;
          }
          return item;
        }),
      },
      () =>
        text === ''
          ? toast.info('Alterado, porém o texto não possuí conteudo.')
          : toast.success('Item alterado'),
    );
  };

  render() {
    return (
      <>
        <HeaderBar getList={this.getList} />
        <Grid
          container
          direction="row"
          alignItems="center"
          justify="center"
          spacing={2}
          style={{
            marginTop: '150px',
          }}
        >
          {this.state.listaItens.map((item: any, index: number) => {
            return (
              <Grid
                item
                xs={12}
                md={4}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <ItemsList
                  data={item}
                  duplicate={this.duplicate}
                  delete={this.delete}
                  edit={this.edit}
                />
                ;
              </Grid>
            );
          })}
        </Grid>
      </>
    );
  }
}

export default Main;
