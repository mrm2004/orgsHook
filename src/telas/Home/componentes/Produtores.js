import React from "react";
import { FlatList, StyleSheet, Text } from "react-native";
import useProdutores from "../../../hooks/useProdutores";
import Produtor from "./Produtor";

export default function Produtores({topo: Topo}){
    
    const [titulo, lista] = useProdutores();

    const TopoLista = () => {
        return <>
            <Topo />
            <Text style={styles.titulo}>{titulo}</Text>
        </>
    }
    
    return <FlatList
        data = {lista.sort((a,b) => a.distancia - b.distancia)}
        ListHeaderComponent={ TopoLista }
        keyExtractor={ ({nome}) => nome}
        renderItem={ ({item}) => <Produtor {...item}/>}// renderiza os itens da lista
    />
}

const styles = StyleSheet.create({
    titulo: {
        fontSize:20,
        lineHeight: 32,
        marginHorizontal: 16,
        marginTop: 16,
        fontWeight: 'bold',
        color: '#464646'
    }
});