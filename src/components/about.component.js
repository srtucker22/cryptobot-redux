import './about.component.css';
import React from 'react';
import Sample from './sample.component';

const mobyFrequencyChart = [['e', 0.1034484578521818], ['t', 0.07650925007212875], ['a', 0.06705422674463608], ['o', 0.06126281604706313], ['n', 0.05755170399769188], ['i', 0.05536761032179977], ['s', 0.05518201073838727], ['h', 0.05448887106194628], ['r', 0.04613161209511143], ['l', 0.03724218370664358], ['d', 0.033396489968826305], ['u', 0.02369077526089496], ['m', 0.02011776337548467], ['c', 0.019296199342748774], ['w', 0.01862505013827609], ['g', 0.018021631587465784], ['f', 0.017912558846502988], ['y', 0.014820698487759224], ['p', 0.014560331299654486], ['b', 0.013809136777217167], ['v', 0.007511945224373184], ['k', 0.007046626837523838], ['q', 0.0010942458851428852], ['x', 0.0009121647772453151], ['j', 0.0008048512740399839], ['z', 0.0005260120894818693]];

const digramChart = [['e_', 0.031022909181959615], ['_t', 0.029296444570733], ['th', 0.028306142219046253], ['he', 0.024572814887545355], ['_a', 0.019300580208394875], ['s_', 0.01833466030097314], ['in', 0.018326220224112174], ['d_', 0.017294655274438478], ['t_', 0.016746988064793532], ['er', 0.013980518427032254], ['_s', 0.013952384837495698], ['an', 0.01385297948779987], ['_o', 0.012253116029487752], ['n_', 0.012123701517619599], ['_w', 0.011682941948213564], ['re', 0.011076194200541853], ['_h', 0.010992731218250071], ['ha', 0.010521024700353827], ['nd', 0.010343783086273529], ['_i', 0.010221870864948454], ['at', 0.009654510142627921], ['ng', 0.009351605161951009], ['hi', 0.008905218874637662], ['y_', 0.008803000165988178]];

const puzzleFrequencyChart = [['p', 0.09712509712509712], ['q', 0.09168609168609168], ['r', 0.0675990675990676], ['x', 0.061383061383061384], ['g', 0.06060606060606061], ['n', 0.05672105672105672], ['h', 0.05128205128205128], ['k', 0.046620046620046623], ['b', 0.04584304584304584], ['w', 0.03418803418803419], ['z', 0.024087024087024088], ['t', 0.023310023310023312], ['m', 0.021756021756021756], ['s', 0.021756021756021756], ['f', 0.019425019425019424], ['e', 0.014763014763014764], ['d', 0.014763014763014764], ['y', 0.012432012432012432], ['c', 0.010878010878010878], ['i', 0.010101010101010102], ['o', 0.00777000777000777], ['u', 0.006993006993006993], ['j', 0.000777000777000777], ['l', 0.000777000777000777], ['a', 0.0], ['v', 0.0]];

const firstCipher = [['a', 'j'], ['b', 'r'], ['c', 'p'], ['d', 'f'], ['e', 'g'], ['f', 'w'], ['g', 'n'], ['h', 's'], ['i', 'b'], ['j', 'q'], ['k', 'h'], ['l', 'x'], ['m', 'm'], ['n', 'i'], ['o', 'v'], ['p', 'e'], ['q', 't'], ['r', 'a'], ['s', 'c'], ['t', 'u'], ['u', 'k'], ['v', 'z'], ['w', 'l'], ['x', 'o'], ['y', 'y'], ['z', 'd']];

const Author = ()=> {
  return (<div className='row'>
    <div>
      <h1>{`About the Author`}</h1>
      <p>{`Hi, I'm Simon. I'm a software engineer living in SF. I like making small projects like this to try new things and stay sharp. This site presented a bunch of fun little challenges. Simulated annealing turned out to be the easiest thing about this little MEA2N app. There are always things to append and modify in any project, and I've decided this one is done enough to publish. Maybe I'll come back to it when I have a sec.`}
      </p>
      <p>{`Feel free to contact me at `}<a href='mailto:srtucker22@gmail.com' target='_blank'>{`srtucker22@gmail.com`}</a>{` if you would like to get in touch.`}</p>
      <h3 className='text-center'>{`Thanks for checking out Cryptobot!`}</h3>
    </div>
  </div>);
};

export const About = ({close})=> {
  function frequencyChart(arr) {
    return arr.map((item, i) => (
      <div key={i}>
        {`${item[0]} : ${(item[1] * 100).toFixed(2)}%`}
      </div>
    ));
  }

  return (
    <div className='wrapper'>
      <div className='close' onTouchTap={close}>
        <div>
          x
        </div>
      </div>
      <div className='container about-container'>
        <Author/>
        <br/>
        <div className='row'>
          <div>
            <h1>{`About Cryptobot`}</h1>
            <p>Cryptobot is a project I put together in my spare time over a short vacation in Keystone, Colorado. Cryptobot currently uses <a href='//en.wikipedia.org/wiki/Simulated_annealing'>simulated annealing</a> to solve cryptograms to its best potential.</p>

            <h3>{`How Cryptobot Solves Cryptograms`}</h3>
            <p>
              Before Cryptobot tries to solve cryptograms, it reads Herman Melvilles <i>Moby Dick</i>. It records the frequency of each letter in <i>Moby Dick</i> to get a frequency chart like this:
            </p>

            <div className='row text-center'>
              {frequencyChart(mobyFrequencyChart)}
            </div>
            <br/>
            <p>
              {`So the letter 'e' shows up 10.34% of the time.`}
            </p>
            <p>
              Now cryptobot makes another frequency chart but with <b>digrams</b>, which are two letter combinations. Cryptobot includes spaces as letters here because its important to know which letters are commonly at the beginning and end of words. This chart is much larger (27^2), but here are some of the top most frequent digrams ('_' represents a space):
            </p>
            <div className='row text-center'>
              {frequencyChart(digramChart)}
            </div>
            <br/>
            <p>
              Now that cryptobot knows a bit about <i>Moby Dick</i>, it takes a look at the cryptogram:
            </p>
            <pre>{`rtgmp srb fpdgkkgkd qx dpq ophy qghpw xe bgqqgkd fy nph bgbqph xk qnp frki, rkw xe nrogkd kxqngkd qx wx: xkmp xh qsgmp bnp nrw cppcpw gkqx qnp fxxi nph bgbqph srb hprwgkd, fzq gq nrw kx cgmqzhpb xh mxkophbrqgxkb gk gq, 'rkw snrq gb qnp zbp xe r fxxi,' qnxzdnq rtgmp 'sgqnxzq cgmqzhpb xh mxkophbrqgxkb?'  bx bnp srb mxkbgwphgkd gk nph xsk ugkw (rb sptt rb bnp mxztw, exh qnp nxq wry urwp nph eppt ophy btppcy rkw bqzcgw), snpqnph qnp ctprbzhp xe urigkd r wrgby-mnrgk sxztw fp sxhqn qnp qhxzftp xe dpqqgkd zc rkw cgmigkd qnp wrgbgpb, snpk bzwwpkty r sngqp hrffgq sgqn cgki pypb hrk mtxbp fy nph.  qnphp srb kxqngkd bx ophy hpurhirftp gk qnrq; kxh wgw rtgmp qngki gq bx ophy uzmn xzq xe qnp sry qx nprh qnp hrffgq bry qx gqbpte, 'xn wprh! xn wprh! g bnrtt fp trqp!' (snpk bnp qnxzdnq gq xoph reqphsrhwb, gq xmmzhhpw qx nph qnrq bnp xzdnq qx nrop sxkwphpw rq qngb, fzq rq qnp qgup gq rtt bppupw jzgqp krqzhrt); fzq snpk qnp hrffgq rmqzrtty qxxi r srqmn xzq xe gqb srgbqmxrq-cxmipq, rkw txxipw rq gq, rkw qnpk nzhhgpw xk, rtgmp bqrhqpw qx nph eppq, exh gq etrbnpw rmhxbb nph ugkw qnrq bnp nrw kpoph fpexhp bppk r hrffgq sgqn pgqnph r srgbqmxrq-cxmipq, xh r srqmn qx qrip xzq xe gq, rkw fzhkgkd sgqn mzhgxbgqy, bnp hrk rmhxbb qnp egptw reqph gq, rkw exhqzkrqpty srb lzbq gk qgup qx bpp gq cxc wxsk r trhdp hrffgq-nxtp zkwph qnp npwdp.`}
            </pre>

            <p>{`First, Cryptobot makes the same frequency charts for the letters in the cryptogram. Cryptobot matches the frequency charts with each other to create its first guess at the cipher.`}
            </p>

            <h3>{`Frequency Chart for Single Letters in Cryptogram:`}</h3>
            <div className='row text-center'>
              {frequencyChart(puzzleFrequencyChart)}
            </div>

            <br/>

            <p>Since 'p' is the most common letter in the cryptogram, Cryptobot thinks it might be subsituting for the letter 'e', the most common letter in <i>Moby Dick</i>. 'q' is the second most common letter in the cryptogram, and 't' is the second most common letter in <i>Moby Dick</i>, so Cryptobot matches those two. It continues down the list for all 26 letters.
            </p>

            <h3>{`First Cipher:`}</h3>
            <div className='row text-center'>
              {firstCipher.map(item=> (
                <div>
                  {`${item[0]} : ${item[1]}`}
                </div>
              ))}
            </div>
            <h3>{`First Guess:`}</h3>
            <pre>{`aunme car wefnhhnhf to fet vesy tnsel og rnttnhf wy ies rnrtes oh tie wahb, ahl og iavnhf hotinhf to lo: ohme os tcnme rie ial peepel nhto tie woob ies rnrtes car sealnhf, wdt nt ial ho pnmtdser os mohvesratnohr nh nt, 'ahl ciat nr tie dre og a woob,' tiodfit aunme 'cntiodt pnmtdser os mohvesratnohr?'  ro rie car mohrnlesnhf nh ies och knhl (ar ceuu ar rie modul, gos tie iot lay kale ies geeu vesy rueepy ahl rtdpnl), cieties tie pueardse og kabnhf a lanry-mianh codul we costi tie tsodwue og fettnhf dp ahl pnmbnhf tie lanrner, cieh rdllehuy a cinte sawwnt cnti pnhb eyer sah muore wy ies.  tiese car hotinhf ro vesy sekasbawue nh tiat; hos lnl aunme tinhb nt ro vesy kdmi odt og tie cay to ieas tie sawwnt ray to ntreug, 'oi leas! oi leas! n riauu we uate!' (cieh rie tiodfit nt oves agtescaslr, nt ommdssel to ies tiat rie odfit to iave cohlesel at tinr, wdt at tie tnke nt auu reekel qdnte hatdsau); wdt cieh tie sawwnt amtdauuy toob a catmi odt og ntr canrtmoat-pombet, ahl uoobel at nt, ahl tieh idssnel oh, aunme rtastel to ies geet, gos nt guariel amsorr ies knhl tiat rie ial heves wegose reeh a sawwnt cnti enties a canrtmoat-pombet, os a catmi to tabe odt og nt, ahl wdshnhf cnti mdsnornty, rie sah amsorr tie gneul agtes nt, ahl gostdhateuy car xdrt nh tnke to ree nt pop loch a uasfe sawwnt-ioue dhles tie ielfe.`
            }
            </pre>

            <br />
            <p>{`So the first guess isnt so hot, but how does Cryptobot measure whether its guess is good?!`}</p>
            <p>Cryptobot needs to score guesses to make sure they are improving. Cryptobot creates a score for a guess based on the sum of the absolute differences between digram freqencies in the guess and digram frequencies in <i>Moby Dick</i>. For example, the frequency of the digram 'e_' (where '_' represents a space) in the guess is 0.6%, whereas its frequency is 3.1% in <i>Moby Dick</i>. The absolute difference is 2.5%. Cryptobot adds these values up for all possible digrams and computes a score for the guess. This is called a 'cost function', and Cryptobot is trying to minimize the 'cost' of a guess.
            </p>

            <br />

            <p>{
              `Now comes the cool part. Cryptobot starts randomly swapping letters in the cipher and recalculating its cost function. The rules are as follows:`
            }</p>
            <ol>
              <li>set a <b>temperature schedule</b> -- the temperature is a score that gradually reduces as cryptobot iterates through new guesses. Cryptobot drops the temperature every 2000 guesses.</li>
              <li>{`Swap a set of letters in the cipher`}</li>
              <li>{`Calculate the cost function`}</li>
              <li>{`If the cost of the new guess is better than the old guess, Cryptobot accepts the new guess. If the cost of the new guess is the best guess yet, store this guess as the best guess.`}
              </li>
              <li>{`If the cost of the new guess is worse than the old guess, Cryptobot generates a random number between 0 and 1. If this number is less than e^((old_cost_function - new_cost_function)/temperature), cryptobot will accept the new guess anyway. Otherwise it will keep the old guess and ditch the new guess`}
              </li>
              <li>{`Keep guessing until the temperature is below a certain threshold`}
              </li>
            </ol>
            <p>{
                `These last two rules are what make Cryptobot awesome. If Cryptobot only accepted better guesses every time, it might find itself going down the wrong path without being able to backtrack. It would be like getting really far in a maze that takes you in the wrong direction. By enabling Cryptobot to occasionally accept slightly worse guesses, we give it some wiggle room to try new paths. Moreover, as the temperature drops, Cryptobot has less and less wiggle room. Here's a sample of Cryptobot solving the cryptogram:`
            }</p>
            <Sample/>
          </div>
        </div>
      </div>
    </div>
  );
};

About.propTypes = {
  close: React.PropTypes.func.isRequired
};
