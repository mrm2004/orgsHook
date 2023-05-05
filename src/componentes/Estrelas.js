import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import Estrela from "./Estrela";


export default function Estrelas({
    quantidade: quantidadeAntiga,
    editavel = false,
    grande = false,
}){
    const [quantidade, setQuantidade] = useState(quantidadeAntiga)

    const RenderEstrelas = () => {
        const listaEstrelas = [];

        for (let index = 0; index < 5; index++) {
            listaEstrelas.push(
                <Estrela 
                    key={index}
                    onPress={() => setQuantidade(index+1)} 
                    desabilitada={!editavel} 
                    preenchida={index < quantidade} 
                    grande={grande}
                />
            );
            
        }

        return listaEstrelas;
    };

    return <View style={styles.linhaEstrelas}>
        <RenderEstrelas />
    </View>
}

const styles = StyleSheet.create({
    
    linhaEstrelas: {
        flexDirection: 'row',
    }
})