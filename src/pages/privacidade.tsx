import { NextPage } from "next";
import { Page } from "~/components/page";

const Privacidade: NextPage = () => {
  return (
    <Page title="Política de Privacidade">
      <div className="bg-stone-200 p-6 rounded-lg text-stone-800 container mx-auto max-w-3xl flex flex-col gap-2">
        <h2 className="text-xl font-semibold">Política Privacidade</h2>
        <p className="mt-2">
          A sua privacidade é importante para nós. É política do pqno respeitar
          a sua privacidade em relação a qualquer informação sua que possamos
          coletar no site <a href="https://pqno.io">pqno</a>, e outros sites que
          possuímos e operamos.
        </p>
        <p>
          Solicitamos informações pessoais apenas quando realmente precisamos
          delas para lhe fornecer um serviço. Fazemo-lo por meios justos e
          legais, com o seu conhecimento e consentimento. Também informamos por
          que estamos coletando e como será usado.
        </p>
        <p>
          Apenas retemos as informações coletadas pelo tempo necessário para
          fornecer o serviço solicitado. Quando armazenamos dados, protegemos
          dentro de meios comercialmente aceitáveis para evitar perdas e roubos,
          bem como acesso, divulgação, cópia, uso ou modificação não
          autorizados.
        </p>
        <p>
          Não compartilhamos informações de identificação pessoal publicamente
          ou com terceiros, exceto quando exigido por lei.
        </p>
        <p>
          O nosso site pode ter links para sites externos que não são operados
          por nós. Esteja ciente de que não temos controle sobre o conteúdo e
          práticas desses sites e não podemos aceitar responsabilidade por suas
          respectivas&nbsp; políticas de privacidade .
        </p>
        <p>
          Você é livre para recusar a nossa solicitação de informações pessoais,
          entendendo que talvez não possamos fornecer alguns dos serviços
          desejados.
        </p>
        <p>
          O uso continuado de nosso site será considerado como aceitação de
          nossas práticas em torno de privacidade e informações pessoais. Se
          você tiver alguma dúvida sobre como lidamos com dados do usuário e
          informações pessoais, entre em contacto connosco.
        </p>

        <h3 className="text-lg font-semibold">Compromisso do Usuário</h3>
        <p>
          O usuário se compromete a fazer uso adequado dos conteúdos e da
          informação que o pqno oferece no site e com caráter enunciativo, mas
          não limitativo:
        </p>
        <ul className="flex flex-col gap-2">
          <li>
            A) Não se envolver em atividades que sejam ilegais ou contrárias à
            boa fé a à ordem pública;
          </li>
          <li>
            B) Não difundir propaganda ou conteúdo de natureza racista,
            xenofóbica, apostas ou azar, qualquer tipo de pornografia ilegal, de
            apologia ao terrorismo ou contra os direitos humanos;
          </li>
          <li>
            C) Não causar danos aos sistemas físicos (hardwares) e lógicos
            (softwares) do pqno, de seus fornecedores ou terceiros, para
            introduzir ou disseminar vírus informáticos ou quaisquer outros
            sistemas de hardware ou software que sejam capazes de causar danos
            anteriormente mencionados.
          </li>
        </ul>
        <h3 className="my-2 text-lg font-semibold">Mais informações</h3>
        <p>
          Esperemos que esteja esclarecido e, como mencionado anteriormente, se
          houver algo que você não tem certeza se precisa ou não, geralmente é
          mais seguro deixar os cookies ativados, caso interaja com um dos
          recursos que você usa em nosso site.
        </p>
        <p className="mt-4 font-semibold italic text-center text-sm text-stone-600">
          Esta política é efetiva a partir de&nbsp;8 de Março de 2023, 10:20
        </p>
      </div>
    </Page>
  );
};

export default Privacidade;
