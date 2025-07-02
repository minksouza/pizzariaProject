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

    return { ok: true}

  }
}

export { CreateProductService }