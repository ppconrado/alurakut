import { SiteClient } from "datocms-client";

export default async function recebedorDeRequests(request, response) {
  if (request.method === "POST") {
    const TOKEN = "7430fbcc96c0e74922ef32cef9727b";
    const client = new SiteClient(TOKEN);

    // Validar os dados, antes de sair cadastrando
    const registroCriado = await client.items.create({
      itemType: "974309", // ID do Model de "Communities" criado pelo Dato
      ...request.body,
      //   title: "Comunidade de Teste",
      //   imageUrl: "https://github.com/ppconrado.png",
      //   creatorSlug: "ppconrado"
    });

    console.log(registroCriado);

    response.json({
      dados: "Algum dado qualquer",
      registroCriado: registroCriado,
    });
    return;
  }

  response.status(404).json({
    message: "Ainda não temos nada no GET, mas no POST tem!",
  });
}
