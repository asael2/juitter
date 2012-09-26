$(document).ready(function() {
	$.Juitter.start({
		searchType:"searchWord", // Obrigatório. Você pode escolher entre "searchWord" (procurar palavra), "fromUser" (de um usuário), "toUser" (para um usuário)
		searchObject:"%23Brasil", // Obrigatório. Você pode inserir uma palavra ou o nome do usuário. Para buscas múltiplas, separe as palavras por vírgula. Para buscar por hashtagh, utilize o %23 antes da palavra.

		// Configurações.
		lang:"", // Deixe vazio para não fazer nenhuma restrição por idiomas. Utilize "pt" para português.
		live:"live-60", // O número depois de "live-" indica o tempo em secundos entre cada atualização. Não exagere. ;-)
		placeHolder:"juitterContainer", // ID da div que irá receber o conteúdo.
		loadMSG: "Carregando...", // Mensagem exibida enquanto os tweets estão sendo carregados. Para utilizar uma imagem, preencha o campo com "image/gif" e informe abaixo a URL. 
		imgName: "loader.gif", // URL da imagem enquanto os tweets estão sendo carregados. Para funcionar você deve preencher o campo loadMSG com "image/gif".
		total: 20, // Número de tweets que serão exibidos. Máximo 100.
		readMore: "Veja no Twitter", // Mensagem exibida ao final do tweet.
		nameUser:"image", // Preencha "image" para exibir o avatar dos usuários ou "text" para exibir apenas o nome dos usuários.
		openExternalLinks:"newWindow", // Defina como serão abertos os links de sites externos com "newWindow" (nova janela) ou "sameWindow" (mesma janela).
		filter:""  // Os tweets que contenham qualquer uma dessas palavras não serão exibidos. 
	});        
});
