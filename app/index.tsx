import { Text, View, TouchableOpacity, Image } from "react-native";
import { Stack, Link, useRouter } from "expo-router"; // Stack e useRouter servem p navegação entre as telas
import { Ionicons } from '@expo/vector-icons'; // biblioteca de icones pra usar na setinha de voltar

export default function Index() {
  const router = useRouter(); //  rota pra navegar entre as telas

  return (
    //  rota pra navegar entre as telas
    <View className="flex-1 bg-white p-1">
      {/* ito, essa parte vai se repetir mas ela só serve pra remover o cabeçalho padrão q já vem no projeto base */}
      <Stack.Screen options={{ headerShown: false }} />

      {/*cabeçalho*/}
      <View className="w-full bg-[#F5F5F5] py-4 items-center">
        <Image
          source={require('./images/nome-Petto-semfundo.png')}
          className="w-40 h-12"
          resizeMode="contain"
        />
      </View>

      {/*seus pets - bloco que tem os pets cadastrados*/}
      <View className="mb-6 p-5">
        <View className="flex-row items-center mt-3 mb-3">
          <Text className="text-2xl font-semibold mr-2">Seus pets</Text>
          <Ionicons name="chevron-forward-outline" size={18} color="black" />
        </View>

        <View className="items-start ml-1">
          {/*botão p cadastrar novo pet*/}
          <TouchableOpacity
            className="w-24 h-24 bg-gray-100 rounded-full justify-center items-center shadow-sm shadow-slate-950"
            onPress={() => router.push('/cadastro_pet')} // leva pra tela de cadastro
          >
            <Image
              source={require('./images/icone-adicionar-pet.jpg')}
              className="w-full h-full rounded-full"
              resizeMode="cover"
            />
          </TouchableOpacity>
          {/*texto que também leva para o cadastro*/}
          <TouchableOpacity onPress={() => router.push('/cadastro_pet')}>
            <Text className="text-primary text-lg font-medium mt-2">Cadastrar pet</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/*mensagem de quando não tem pets cadastrados*/}
      <View className="flex-1 justify-start items-center pt-4">
        <Image
          // gatin de exemplo pra tela sem pet cadastrado
          source={require('./images/Erro_Gatinho.png')}
          className="w-80 h-80 mb-3 rounded-xl"
          resizeMode="contain"
        />
        <Text className="text-lg text-gray-500">Selecione ou cadastre um Pet!</Text>
      </View>
    </View>
  );
}
