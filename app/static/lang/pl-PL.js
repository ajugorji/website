export default () => {
  return new Promise(function(resolve) {
    resolve({
      common: {
        title: '',
        subtitle: '',
        error_with_status: 'Wystąpił błąd na serwerze',
        '404': 'Tej strony nie można było znaleźć.',
        '404_subtitle': 'Możesz albo zostać tutaj albo wrócić do strony głównej',
        back: 'powrót do strony głównej',
        login: '',
        login_create: '',
        login_or: '',
        login_email: '',
        login_password: '',
        login_remember: '',
        login_forgot: '',
        continue: '',
        login_title: '',
        login_subtitle: '',
        register: '',
        register_already: '',
        register_or: '',
        register_name: '',
        register_email: '',
        register_password: '',
        register_confirm: '',
        register_title: '',
        register_subtitle: '',
        accept: '',
        gb: 'English',
        pl: 'Polski',
        de: 'Deutsch',
        zh: '简体中文',
        pt: '󠁥󠁮󠁧󠁿Português',
        id: '󠁥󠁮󠁧󠁿Bahasa Indonesia',
        in: '󠁥󠁮󠁧󠁿हिन्दी',
        ar: '󠁥󠁮󠁧󠁿العربيّة',
        notif_msg: '',
      },
      calculator: {
        title: 'Kalkulator wydobycia Lotus',
        subtitle: '',
        user_rewards_xpi: 'Twoje dzienne wydobycie Lotusa:',
        user_electricity_costs: 'Dzienny koszt energii elektrycznej:',
        gpu_question: 'Jaka jest Twoja karta graficzna?',
        user_hashrate: 'Jaki jest twój hashrate? *',
        user_power_consumption: 'Jakie jest twoje zużycie energii? *',
        watt_cost: 'Ile kosztuje 1 kwh w Twojej lokalizacji?',
        advanced: 'Pokaż zaawansowane',
        avg_price: 'Średnia cena [USDT]',
        current_difficulty: 'Bieżąca trudność',
        total_network_hashrate: 'Całkowity hashrate sieci',
        update_data: 'Pobierz nowe dane',
        rewards: 'Wydobycie',
        electricity_costs: 'Koszty energii elektrycznej',
        hourly: 'Godzinowe',
        daily: 'Dzienne',
        weekly: 'Tygodniowe',
        monthly: 'Miesięczne',
        period: 'okres',
      },
      menu: {
        news: 'Newsy',
      },
      lotusLanding: {
        features: {
          title: 'Tu chodzi o',
          feature1: {
            title: 'Inteligentne kontrakty',
            description:
              'Taproot ze stanem, większymi liczbami całkowitymi, większą ilością opcodów i nowym smart sighashem ',
          },
          feature2: {
            title: 'Samofinansowanie',
            description:
              '50% nowych monet trafia do górników, 50% do projektów wspierających społeczność',
          },
          feature3: {
            title: 'Skalowalność',
            description:
              'Oparty na bazie kodowej eCash, która pozwala organiczne skalowanie do +1M transakcji/sekundę ',
          },
          feature4: {
            title: 'Stabilność',
            description:
              'Emisja nowych monet miękko podąża za podażą i popytem',
          },
        },
        story: {
          section1: {
            headtitle: 'Nasza misja',
            title: 'Potężny symbol wdzięczności',
            text:
              'Każdego dnia, w naszych interakcjach z innymi ludźmi mamy doświadczenia, które czynią życie wartym. Mówimy sobie nawzajem "dziękuję". Ale, samo mówienie nic nie kosztuję, a słowa są ulotne. Łatwo jest wyrazić wdzięczność za pomocą samych słów. Jak bardzo motywujące jest "dziękuję"? Co by było, gdybyśmy mogli poprzeć nasze słowa czymś bezcennym? Jak wyglądałby świat, gdybyśmy mieli bardziej efektywny sposób na wyrażanie wdzięczności dla siebie nawzajem? Co by było, gdybyśmy mogli zatrzymać "wdzięczność", którą otrzymujemy, na zawsze? ',
          },
          section2: {
            headtitle: 'Wieczna wdzięczność',
            title: 'Radość dawania i otrzymywania',
            text:
              'Projekt Lotos wierzy, że będzie on sprzyjał duchowi wzajemności. Wierzymy, że poprowadzi ludzi w kierunku pozytywnych działań - a z dala od rzeczy, które nie są korzystne. I tworzymy ekosystem, aby zrobić dokładnie to. Kwiaty są często dawane, aby okazać wdzięczność, ale nie możemy trzymać łatwo więdnących kwiatów pod ręką. Dzięki tokenizacji kwiatów, możemy mieć ich symbol zawsze przy sobie. Tokeny nie zajmują fizycznej przestrzeni i nie więdną. Lotos w szczególności symbolizuje czystość, oświecenie, odrodzenie i regenerację. Są to wartości, które ten token chce reprezentować.',
          },
          section3: {
            headtitle: 'Społeczność',
            title:
              'Lotus to innowacja napędzana przez społeczność, która zapewni, że Twoja wdzięczność zostanie zachowana na zawsze.',
            text:
              'Rejestr tokenów Lotus jest utrzymywany na wolnym od zezwoleń, nieocenzurowanym i otwartym blockchainie, który jest utrzymywany i rozwijany przez oprogramowanie wyprodukowane przez Fundację Logos. Nowe tokeny są bite poprzez proof-of-work mining i przekazywane jako nagroda dla deweloperów, którzy tworzą infrastrukturę, która umożliwia istnienie i transfer tokena oraz dla górników, którzy starannie utrzymują dokładność blockchaina. Odbywa się to poprzez "nagrody blokowe", które są otwarte i przejrzyste. W przeciwieństwie do Bitcoina, który jest aktywem spekulacyjnym, Lotos jest bezcenny - jest tokenem uznania - ma wartość sentymentalną. Harmonogram nagród jest zaprogramowany tak, aby reagować na zmiany w popycie na tokeny Lotus i jest inflacyjny. Przez to, że jest inflacyjny, nie ma powodu, aby go gromadzić, chyba że jako przypomnienie, jak bardzo ludzie nas cenią. Lotus nie ma być inwestycją, ale nasze inwestycje w siebie nawzajem będą generować więcej Lotusa.',
          },
        },
        before_carousel_1:
          'Nowe Lotusy są wydawane poprzez nagrody, które są dzielone pomiędzy górników i projekty, które przynoszą korzyści dobru publicznemu jako wyraz uznania.',
        before_carousel_2:
          "Ilekroć używasz Lotusa, aby docenić swoich przyjaciół, wiesz, że wspierasz również te wspaniałe projekty.",
        banner: {
          caption:
            'Kiedy dajesz lub przyjmujesz Lotusa, wspierasz wspólnote i dodajesz wartość do światowej gospodarki.',
          text: 'Inicjatywy, które wspierasz używając Lotusa to: ',
          initiatives: [
            'Prawa człowieka',
            'Energia odnawialna',
            'Prywatność cyfrowa',
            'Permakultura',
            'Oprogramowanie open source',
            'Działania humanitarne',
          ],
        },
        faq: {
          q1: {
            question: 'Jak mogę zacząć wydobywać?',
            answer:
              'Będziesz potrzebował uruchomić Lotus Node na swoim komputerze. Możesz znaleźć instrukcje <a href="https://docs.givelotus.org/guides/mining" target="_blank">tutaj</a>. Aby sprawdzić swój hashrate i przybliżone nagrody sprawdź nasz <a href="/calculator" target="_blank">kalkulator wydobycia</a>.',
          },
          q2: {
            question: 'Jakie są dostępne portfele?',
            answer:
            'Korzystaj z opartego na przeglądarce <a href="https://sendlotus.com" target="_blank">SendLotus.com</a> lub na swoim urządzeniu mobilnym możesz użyć Lotus Vase z <a href="https://play.google.com/store/apps/details?id=org.cashweb.cashew" target="_blank">Android</a> i <a href="https://apps.apple.com/us/app/cashew-wallet/id1539306720" target="_blank">iPhone</a>. Możesz również uruchomić lekki Lotus Node dla <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-win64-setup-unsigned.exe" target="_blank">Windows</a>, <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-osx-unsigned.dmg" target="_blank">MacOS</a> i <a href="https://storage.googleapis.com/lotus-project/lotus-2.0.3-x86_64-linux-gnu.tar.gz" target="_blank">Linux</a>. ',
          },
          q3: {
            question: 'Jak zdobyć Lotusa?',
            answer:
              'Możesz użyć naszego <a href="https://faucet.lotuslounge.org/" target="_blank">fauceta</a>. Lub możesz dostać go w prezencei na naszej grupie <a href="https://t.me/givelotus" target="_blank">na telegramie</a>. Możesz również wymienić swoje inne monety na Lotus [XPI] na <a href="https://www.exbitron.com/" target="_blank">Exbitron exchange</a>.',
          },
          q4: {
            question: 'Gdzie mogę handlować?',
            answer:
              'Na giełdzie Exbitron można handlować Lotusem z <a href="https://www.exbitron.com/trading/xpiusdt" target="_blank">USDT</a>, <a href="https://www.exbitron.com/trading/xpidoge" target="_blank">Dogecoin</a> oraz <a href="https://www.exbitron.com/trading/xpibch" target="_blank">Bitcoin Cash</a>',
          },
          q5: {
            question: 'Jak mogę wesprzeć projekt?',
            answer:
              'Sprawdź otwarty kod źródłowy, który mamy <a href="https://github.com/LogosFoundation" target="_blank">tutaj</a> i nie krępuj się skontaktować z deweloperami na naszej <a href="https://t.me/givelotus" target="_blank">grupie telegramowej</a>.',
          },
          q6: {
            question:
              'Czy są jakieś przewodniki brandingowe z logotypami lub obrazami, których mogę użyć?',
            answer:
              'Można je pobrać <a href="https://storage.googleapis.com/lotus-project/Lotus%20Branding.zip" target="_blank">tutaj</a>',
          },
        },
        header_language: 'język',
        header_theme: 'kolor interfejsu',
        header_dark: 'ciemny',
        header_light: 'jasny',
        header_about: 'o nas',
        header_projects: 'projekty',
        header_carousel: 'projekty',
        header_faq: 'FAQ',
        header_contact: 'kontakt',
        header_block_explorer: 'Eksplorator bloków',
        documentation: 'Dokumentacja',
        banner_title: '',
        banner_titlestrong: 'Token uznania',
        banner_subtitle:
          'Lotus to bezcenny cyfrowy dowód uznania, który możesz mieć zawsze pod ręką.',
        faq_subtitle:
          'Masz pytanie? Sprawdź nasze najczęściej zadawane pytania, aby znaleźć odpowiedź.',
        news_readmore: 'czytaj więcej',
        stampchat_desc:
          ' StampChat to zdecentralizowany, szyfrowany end-to-end komunikator, który wykorzystuje token Lotusa, aby zapewnić, że wszystkie wiadomości, które otrzymujesz, są wartościowe. Dzięki temu spam może być filtrowany na platformie bez scentralizowanych moderatorów. Komunikacja jest zdecentralizowana, bezpieczna i nieocenzurowana. ',
        becash_desc:
          ' Be.cash współpracuje z Fundacją Logos, aby pomóc w rozwoju oprogramowania lotus blockchain, a także w rozwoju systemów Point of Sale i mobilnych metod płatności dla obszarów bez niezbędnej infrastruktury dla tradycyjnych metod płatności. ',
        bitcoin_abc_desc:
          ' Bitcoin ABC rozwija wysoce skalowalne oprogramowanie open-source do wydobywania i przesyłania kryptotokenów. Chociaż Bitcoin ABC nie pobiera opłat za swoją pracę, Lotus wykorzystuje to oprogramowanie jako podstawę sieci i uważa za stosowne odwzajemnić się tym deweloperom. ',
        services_button: 'Odkryj',
      },
    })
  })
}
