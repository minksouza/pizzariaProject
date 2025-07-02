import prismaClient from "../../prisma";

interface ProductRequest{ //sempre que a função execute() for chamada, terá que obrigatoriamente passar os dados que estão na interface
  name: string;
  price: string;
  description: string;
  banner: string;
  category_id: string;
}

class CreateProductService{
  async execute({name, price, description, banner, category_id}: ProductRequest){
    const product = await prismaClient.product.create({
      data:{
        name: name,
        price: price,
        description: description,
        banner: banner,
        category_id: category_id
      }
    });
    return product;

  }
}

export { CreateProductService }