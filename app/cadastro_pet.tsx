import { View, Text, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';
import { Stack, useRouter } from "expo-router";
import React from 'react';
import { Ionicons } from '@expo/vector-icons'; // biblioteca de icones pra usar na setinha de voltar

const CadastroPet = () => {
    const router = useRouter(); // rota para controlar a navegação de telas

    return (
        <View className="flex-1 bg-white p-1">
            {/*esconde o cabeçalho padrão da tela */}
            <Stack.Screen options={{ headerShown: false }} />

            {/*cabeçalho*/}
            <View className="w-full bg-[#F5F5F5] py-4 items-center">
                <Image
                    source={require('./images/nome-Petto-semfundo.png')}
                    className="w-40 h-12"
                    resizeMode="contain"
                />
            </View>
            {/*scrollView pra que o formulário seja rolável em telas menores*/}
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} className="px-5">
                {/*setinha de voltar e nome da tela*/}
                <View className='mb-6 pt-5'>
                    <TouchableOpacity onPress={() => router.back()} className="flex-row items-center mt-3 mb-3">
                        <Ionicons name="chevron-back-outline" size={24} color="black" />
                        <Text className="text-2xl font-semibold ml-2">Cadastre um pet!</Text>
                    </TouchableOpacity>
                </View>

                {/*LEMBRAR DE INSERIR area de inserção de foto// ito, aqui podemos usar o imagepicker*/}
                <TouchableOpacity className="w-32 h-32 bg-gray-100 rounded-xl justify-center items-center self-center mb-6 shadow">
                    <Text className="text-gray-500 text-sm">Inserir foto</Text>
                </TouchableOpacity>

                {/*campos do formulário // aqui basicamente eu to criando um array de campos onde vao ter essas mensagens no placehouder e cada uma vai ter um index sendo mapeado pra cada um ser unico*/}
                {[
                    "Nome do Pet",
                    "Data de Nascimento",
                    "Tipo (ex. Cachorro, Gato, etc.)",
                    "Cor",
                    "Peso",
                    "Raça",
                    "Sexo"
                ].map((placeholder, index) => (
                    <TextInput
                        key={index}
                        className="h-11 bg-gray-100 w-80 self-center rounded-md px-3 mb-3 shadow-sm"
                        placeholder={placeholder}
                        placeholderTextColor="#999"
                    />
                ))}

                {/*cadastrar*/}
                <TouchableOpacity className="bg-black py-3 w-32 self-center rounded-md items-center mb-4 mt-1">
                    <Text className="text-white font-semibold">Cadastrar Pet</Text>
                </TouchableOpacity>

                {/*texto de voltar*/}
                <TouchableOpacity onPress={() => router.back()} className="items-center mb-6">
                    <Text className="text-sm text-[#828282] underline">Voltar para a página inicial</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default CadastroPet;
