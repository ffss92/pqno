import { NextPage } from "next";
import { Page } from "~/components/page";

const TermosDeUso: NextPage = () => {
  return (
    <Page title="Termos de Uso">
      <div className="bg-stone-200 p-6 rounded-lg text-stone-800 container mx-auto max-w-3xl flex flex-col gap-2">
        <h2 className="text-xl font-semibold">1. Termos</h2>
        <p>
          Ao acessar ao site <a href="https://pqno.io">pqno</a>, concorda em
          cumprir estes termos de serviço, todas as leis e regulamentos
          aplicáveis e concorda que é responsável pelo cumprimento de todas as
          leis locais aplicáveis. Se você não concordar com algum desses termos,
          está proibido de usar ou acessar este site. Os materiais contidos
          neste site são protegidos pelas leis de direitos autorais e marcas
          comerciais aplicáveis.
        </p>
        <h2 className="text-xl font-semibold">2. Uso de Licença</h2>
        <p>
          É concedida permissão para baixar temporariamente uma cópia dos
          materiais (informações ou software) no site pqno , apenas para
          visualização transitória pessoal e não comercial. Esta é a concessão
          de uma licença, não uma transferência de título e, sob esta licença,
          você não pode:&nbsp;
        </p>
        <ol className="list-disc px-4 text-sm text-stone-700 my-2">
          <li>
            <span>Modificar ou copiar os materiais;&nbsp;</span>
          </li>
          <li>
            Usar os materiais para qualquer finalidade comercial ou para
            exibição pública (comercial ou não comercial);&nbsp;
          </li>
          <li>
            Tentar descompilar ou fazer engenharia reversa de qualquer software
            contido no site pqno;&nbsp;
          </li>
          <li>
            Remover quaisquer direitos autorais ou outras notações de
            propriedade dos materiais; ou&nbsp;
          </li>
          <li>
            Transferir os materiais para outra pessoa ou 'espelhe' os materiais
            em qualquer outro servidor.
          </li>
        </ol>
        <p>
          Esta licença será automaticamente rescindida se você violar alguma
          dessas restrições e poderá ser rescindida por pqno a qualquer momento.
          Ao encerrar a visualização desses materiais ou após o término desta
          licença, você deve apagar todos os materiais baixados em sua posse,
          seja em formato eletrónico ou impresso.
        </p>
        <h2 className="text-xl font-semibold">
          3. Isenção de responsabilidade
        </h2>
        <ol className="list-disc px-4 text-sm text-stone-700 my-2">
          <li>
            Os materiais no site da pqno são fornecidos 'como estão'. pqno não
            oferece garantias, expressas ou implícitas, e, por este meio, isenta
            e nega todas as outras garantias, incluindo, sem limitação,
            garantias implícitas ou condições de comercialização, adequação a um
            fim específico ou não violação de propriedade intelectual ou outra
            violação de direitos.
          </li>
          <li>
            Além disso, o pqno não garante ou faz qualquer representação
            relativa à precisão, aos resultados prováveis ou à confiabilidade do
            uso dos materiais em seu site ou de outra forma relacionado a esses
            materiais ou em sites vinculados a este site.
          </li>
        </ol>
        <h2 className="text-xl font-semibold">4. Limitações</h2>
        <p>
          Em nenhum caso o pqno ou seus fornecedores serão responsáveis por
          quaisquer danos (incluindo, sem limitação, danos por perda de dados ou
          lucro ou devido a interrupção dos negócios) decorrentes do uso ou da
          incapacidade de usar os materiais em pqno, mesmo que pqno ou um
          representante autorizado da pqno tenha sido notificado oralmente ou
          por escrito da possibilidade de tais danos. Como algumas jurisdições
          não permitem limitações em garantias implícitas, ou limitações de
          responsabilidade por danos conseqüentes ou incidentais, essas
          limitações podem não se aplicar a você.
        </p>
        <h2 className="text-xl font-semibold">5. Precisão dos materiais</h2>
        <p>
          Os materiais exibidos no site da pqno podem incluir erros técnicos,
          tipográficos ou fotográficos. pqno não garante que qualquer material
          em seu site seja preciso, completo ou atual. pqno pode fazer
          alterações nos materiais contidos em seu site a qualquer momento, sem
          aviso prévio. No entanto, pqno não se compromete a atualizar os
          materiais.
        </p>
        <h2 className="text-xl font-semibold">6. Links</h2>
        <p>
          O pqno não analisou todos os sites vinculados ao seu site e não é
          responsável pelo conteúdo de nenhum site vinculado. A inclusão de
          qualquer link não implica endosso por pqno do site. O uso de qualquer
          site vinculado é por conta e risco do usuário.
        </p>
        <h3 className="text-lg font-semibold">Modificações</h3>
        <p>
          O pqno pode revisar estes termos de serviço do site a qualquer
          momento, sem aviso prévio. Ao usar este site, você concorda em ficar
          vinculado à versão atual desses termos de serviço.
        </p>
        <h3 className="text-lg font-semibold">Lei aplicável</h3>
        <p>
          Estes termos e condições são regidos e interpretados de acordo com as
          leis do pqno e você se submete irrevogavelmente à jurisdição exclusiva
          dos tribunais naquele estado ou localidade.
        </p>
      </div>
    </Page>
  );
};

export default TermosDeUso;
