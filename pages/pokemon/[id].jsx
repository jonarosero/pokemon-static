import DefaultLayout from "@/layouts/default";
import { useRouter } from "next/router";

const PokemonDetail = () => {

  const router = useRouter();
  const { id } = router.query;
  
  return (
    <DefaultLayout>
        POKEMON {id}
    </DefaultLayout>
  )
}

export default PokemonDetail