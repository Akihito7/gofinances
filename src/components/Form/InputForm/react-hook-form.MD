      <Controller
                      name="teste"
                      control={control}
                      render={({ field: {onChange, value}}) => (


                          <InputText 
                          onChangeText={onChange}
                           placeholder='ai que lindo'
                           value={value}
                          />

O <Controller> ele informa que o componente que irá ser renderizado no render vai ser controlado de pelo react-hook-form dessa maneira não precisamos se preocupar em definir estados para armazenar valores

A propriedade name ela serve para definirmos o nome pro componenente para posteriormente após o submit do form, possamos pegar o valor do form pelo nome fornecido

A propriedade control serve para dizermos para o react-hook-form que o valor desse componenente deverá ser guardado após o submit

A propriedade render serve para dizermos qual componente deverá ser renderizado, podemos pegar nela as propriedades do componente que será renderizado, nesse caso pegamos a onChange e o value.

o onChange pegamos para que sempre o conteudo do InputForm mudar vamos pegar ela e atribuir ao onChangeText do InputForm para atualizar o valor e o value pegamos para definir qual o value atual do InputForm sempre será o valor digitado