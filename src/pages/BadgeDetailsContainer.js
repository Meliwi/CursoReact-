import React from 'react';


import PageLoading from '../components/PageLoading';
import PageEror from '../components/PageError';
import api from '../api';
import BadgeDetails from './BadgeDetails';


class BadgeDetailsContainer extends React.Component{
    state={
      loading: true,
      error: null,
      data: undefined,
      modalIsOpen: false,
    }
     
    //Traemos los datos cuando el component ya esté listo
    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        this.setState({loading:true, error: null})
        try{
         const data = await api.badges.read(
             //variable que nos ayuda acceder a la URL
             this.props.match.params.badgeId
         )
         this.setState({loading:false, data:data})
        }
        catch(error){
         this.setState({loasing:false, error:error})
        }
    }

    handleOpenModal= e =>{
        //Lo unico que hace es cambiar el estado
        this.setState({modalIsOpen:true})
    }

    handleCloseModal= e =>{
        //Lo unico que hace es cambiar el estado
        this.setState({modalIsOpen:false})
    }

    handleDeleteBadge = async e =>{
        this.setState({loading:true, error: null})
        try{
            api.badges.remove(
                this.props.match.params.badgeId
            )
            this.setState({loading:false})
            //Una vez se complete sacamos al usuario
            this.props.history.push('/badges')
        }
        catch(error){
            this.setState({loading:false, error: error})
        }
    }
    render(){
        //Si la página esta cargando entonces retornar la página de cargar
        if(this.state.loading){
            return <PageLoading />
        }
 
        if(this.state.error){
            return <PageEror error={this.state.error} />
        }
        return (
            <BadgeDetails 
            onCloseModal={this.handleCloseModal} 
            onOpenModal={this.handleOpenModal}
            modalIsOpen={this.state.modalIsOpen}
            onDeleteBadge ={this.handleDeleteBadge}
            badge={this.state.data}/>
        )
    }
}

export default BadgeDetailsContainer;