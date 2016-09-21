'use strict';

let contents = {
  "albums": [
    {
      "name": "Primo Victoria",
      "tracks": [
        {
          "name": "Primo Victoria",
          "subject": "Operation Overlord",
          "date": new Date("1944-06-06"),
          "position": {
            "lat": 49.7247897,
            "lng": -1.9313915
          }
        },
        {
          "name": "Reign of Terror",
          "subject": "Saddam Hussein and Operation Desert Storm",
          "date": new Date("1991-01-17")
        },
        {
          "name": "Panzer Battalion",
          "subject": "Operation Iraqi Freedom",
          "date": new Date("2003-03-20")
        },
        {
          "name": "Wolfpack",
          "subject": "Wolf pack Hecht's attack on convoy ON 92 in the battle of the Atlantic",
          "date": new Date("1942-05-12")
        },
        {
          "name": "Counterstrike",
          "subject": "The Six-Day War",
          "date": new Date("1967-06-05")
        },
        {
          "name": "Stalingrad",
          "subject": "The Battle of Stalingrad",
          "date": new Date("1942-08-23")
        },
        {
          "name": "Into the Fire",
          "subject": "The use of napalm in the Vietnam War",
          "date": new Date("1955-11-01")
        },
        {
          "name": "Purple Heart",
          "subject": "People awarded the Purple Heart",
          "date": new Date("1917-04-05")
        },
        {
          "name": "Metal Machine",
          "subject": "A tribute to heavy metal"
        }
      ]
    },
    {
      "name": "Attero Dominatus",
      "tracks": [
        {
          "name": "Attero Dominatus",
          "subject": "About the Battle of Berlin from the Soviet perspective",
          "date": new Date("1945-04-16")
        },
        {
          "name": "Nuclear Attack",
          "subject": "About Hiroshima and Nagasaki",
          "date": new Date("1945-08-06")
        },
        {
          "name": "Rise Of Evil",
          "subject": "About the events surrounding the creation of the Third Reich and the events leading to World War II, from the Nazis' perspective",
          "date": new Date("1933-01-30")
        },
        {
          "name": "In The Name Of God",
          "subject": "About organizations like Hamas, al-Qaeda and the Taliban, from the perspective of those opposed to their actions",
          "date": new Date("1987-01-01")
        },
        {
          "name": "We Burn",
          "subject": "About crimes in the Yugoslav Wars from the perpetrators' perspective",
          "date": new Date("1991-06-26")
        },
        {
          "name": "Angels Calling",
          "subject": "About the horror of World War I",
          "date": new Date("1914-07-28")
        },
        {
          "name": "Back In Control",
          "subject": "About the Falklands War from the British perspective",
          "date": new Date("1982-06-14")
        },
        {
          "name": "Light In The Black",
          "subject": "About peacekeeping forces, such as that of the UN",
          "date": new Date("1945-10-24")
        },
        {
          "name": "Metal Crüe",
          "subject": "About heavy metal, it is built up entirely by famous band names such as Kiss, Gamma Ray, Queen, In Flames, Iron Maiden, Judas Priest, Accept, Venom, Unleashed, Slayer, Motörhead, Rush, Guns N' Roses etc"
        }
      ]
    },

    {
      "name": "Metalizer"
    },

    {
      "name": "The Art of War",
      "tracks": [
        {
          "name": "Sun Tzu Says",
          "subject": "A short introduction to Sun Tzu's Art of War",
          "date": new Date("-000206-01-01")
        },
        {
          "name": "Ghost Division",
          "subject": "Erwin Rommel and the 7th Panzer Division",
          "date": new Date("1940-05-01"),
          "wiki": "https://en.wikipedia.org/wiki/7th_Panzer_Division_%28Wehrmacht%29"
        },
        {
          "name": "The Art of War",
          "subject": "Sun Tzu's 'Planning Offensives'",
          "date": new Date("-000206-02-01")
        },
        {
          "name": "40:1",
          "subject": "The Battle of Wizna",
          "date": new Date("1939-09-07"),
          "wiki": "https://en.wikipedia.org/wiki/Battle_of_Wizna",
          "position": {
            "lat": 53.1885963,
            "lng": 22.3589274
          }
        },
        {
          "name": "Unbreakable",
          "subject": "'Partizan in WW2'",
          "date": new Date("-000206-01-01")
        },
        {
          "name": "The Nature of Warfare",
          "subject": "Sun Tzu's 'Vacuity and Substance'"
        },
        {
          "name": "Cliffs of Gallipoli",
          "subject": "The Gallipoli Campaign",
          "date": new Date("1915-04-25")
        },
        {
          "name": "Talvisota",
          "subject": "The Finnish Winter War",
          "date": new Date("1939-11-30")
        },
        {
          "name": "Panzerkampf",
          "subject": "The Battle of Kursk",
          "date": new Date("1943-07-05")
        },
        {
          "name": "Union (Slopes of St. Benedict)",
          "subject": "The Battle of Monte Cassino",
          "date": new Date("1944-01-17")
        },
        {
          "name": "The Price of a Mile",
          "subject": "The Battle of Passchendaele and senseless slaughter of World War I in general",
          "date": new Date("1917-07-31")
        },
        {
          "name": "Firestorm",
          "subject": "The strategic bombing campaigns of World War II",
          "date": new Date("1914-08-24")
        },
        {
          "name": "A Secret",
          "subject": "A humorous outro addressing music piracy"
        }
      ]
    },

    {
      "name": "Coat of Arms",
      "tracks": [
        {
          "name": "Coat of Arms",
          "subject": "About the Greco-Italian War during WWII",
          "date": new Date("1940-10-28")
        },
        {
          "name": "Midway",
          "subject": "About the Battle of Midway",
          "date": new Date("1942-05-12")
        },
        {
          "name": "Uprising",
          "subject": "About the Warsaw Uprising",
          "date": new Date("1944-08-01")
        },
        {
          "name": "Screaming Eagles",
          "subject": "About the 101st Airborne Division and the Siege of Bastogne",
          "date": new Date("1944-12-20"),
          "wiki": "https://en.wikipedia.org/wiki/Siege_of_Bastogne",
          "position": {
            "lat": 50.0118023,
            "lng": 5.6896453
          }
        },
        {
          "name": "The Final Solution",
          "subject": "About the Holocaust",
          "date": new Date("1938-11-07")
        },
        {
          "name": "Aces in Exile",
          "subject": "About foreign pilots during the Battle of Britain",
          "date": new Date("1940-07-10")
        },
        {
          "name": "Saboteurs",
          "subject": "About the Norwegian heavy water sabotage at Vemork",
          "date": new Date("1942-10-19")
        },
        {
          "name": "Wehrmacht",
          "subject": "About the Nazi war machine and the effects of the Third Reich on an ordinary German soldier",
          "date": new Date("1935-03-16")
        },
        {
          "name": "White Death",
          "subject": "About Simo Häyhä, an extremely skilled Finnish sniper during the Winter War",
          "date": new Date("1939-11-30")
        },
        {
          "name": "Metal Ripper",
          "subject": "A tribute to heavy metal as in the songs \"Metal Machine\" and \"Metal Crüe\" from previous albums, this time using lyrics and guitar riffs from heavy metal songs. It includes lyrical tributes to bands such as: AC/DC, Mötley Crüe, Iron Maiden, Metallica, Manowar, Twisted Sister, Ozzy Osbourne, Judas Priest, Black Sabbath, Rainbow, HammerFall, Dokken, Krokus, Yngwie Malmsteen, Accept, Deep Purple, Queensrÿche, Dimmu Borgir, Queen and Heaven's Gate"
        }
      ]
    },

    {
      "name": "Carolus Rex",
      "tracks": [
        {
          "name": "Dominium maris Baltici (Dominion of the Baltic Sea)"
        },
        {
          "name": "The Lion from the North",
          "subject": "Coronation of Gustav II Adolph of Sweden",
          "date": new Date("1611-10-30")
        },
        {
          "name": "Gott Mit Uns (God With Us)",
          "subject": "The battle of Breitenfeld",
          "date": new Date("1631-09-07"),
          "position": {
            "lat": 51.4064791,
            "lng": 12.330850
          }
        },
        {
          "name": "A Lifetime of War",
          "subject": "The misery caused by the Thirty Years' War",
          "date": new Date("1618-05-23")
        },
        {
          "name": "1648",
          "subject": "The battle of Prague",
          "wiki": "https://en.wikipedia.org/wiki/Battle_of_Prague_(1648)",
          "date": new Date("1648-06-25"),
          "position": {
            "lat": 50.0595853,
            "lng": 14.3255428
          }
        },
        {
          "name": "The Carolean's Prayer",
          "subject": "The Caroleans"
        },
        {
          "name": "Carolus Rex (King Charles)",
          "subject": "The crowning and policies of Charles XII of Sweden",
          "date": new Date("1697-04-05")
        },
        {
          "name": "Killing Ground",
          "subject": "The battle of Fraustadt",
          "date": new Date("1706-02-02"),
          "position": {
            "lat": 50.7734,
            "lng": 13.7886113
          }
        },
        {
          "name": "Poltava",
          "subject": "The defeat in the battle of Poltava",
          "date": new Date("1709-06-27")
        },
        {
          "name": "Long Live the King",
          "subject": "The death and funeral procession of Charles XII",
          "date": new Date("1718-12-11")
        },
        {
          "name": "Ruina Imperii (Downfall of the Empire)",
          "subject": "The Carolean Death March and the fall of the Swedish Empire",
          "date": new Date("1719-01-07")
        }
      ]
    },

    {
      "name": "Heroes",
      "tracks": [
        {
          "name": "Night Witches",
          "subject": "The all female Soviet 588th Night Bomber Regiment called \"Night Witches\"",
          "date": new Date("1941-10-08"),
          "wiki": "https://en.wikipedia.org/wiki/Night_Witches"
        },
        {
          "name": "No Bullets Fly",
          "subject": "The Charlie Brown and Franz Stigler incident, in which German pilot Stigler accompanied a disabled American bomber back to the English Channel.",
          "date": new Date("1943-12-20")
        },
        {
          "name": "Smoking Snakes",
          "subject": "Arlindo Lúcio da Silva, Geraldo Baeta da Cruz and Geraldo Rodrigues de Souza – 3 Brazilian Expeditionary Force soldiers who became separated from their unit and fought a large contingent of Germans in Italy on 14 April 1945. Refusing surrender, they fought to their deaths and were buried by the Germans, who placed a cross over their graves with the inscription 'Drei brasilianische Helden' (Three Brazilian Heroes).",
          "date": new Date("1944-07-02")
        },
        {
          "name": "Inmate 4859",
          "subject": "Witold Pilecki, soldier of Polish Armia Krajowa and leader of resistance movement in the Birkenau Auschwitz concentration camp, where he was interned voluntarily with inmate number 4859. Produced the Witold's Report.",
          "date": new Date("1943-04-27")
        },
        {
          "name": "To Hell and Back",
          "subject": "Audie Murphy, one of the most decorated American veterans of World War II. Specifically his post war battle with; and victory over PTSD. Based off his own poem 'The Crosses Grow on Anzio' from his book 'To Hell and Back'",
          "date": new Date("1949-01-01")
        },
        {
          "name": "The Ballad of Bull",
          "subject": "Corporal Leslie \"Bull\" Allen, an Australian Army soldier awarded the US Silver Star for rescuing 12 wounded American soldiers during the Papua New Guinea campaign of World War II.[11][12][13]",
          "date": new Date("1943-07-01")
        },
        {
          "name": "Resist and Bite",
          "subject": "Chasseurs Ardennais, an infantry formation of the Belgian Armed Forces that fought in the Battle of Belgium in World War II",
          "date": new Date("1940-05-10")
        },
        {
          "name": "Soldier of 3 Armies",
          "subject": "Lauri Törni known as Larry Thorne, soldier of the Finnish Army, the German Waffen-SS, and the United States Army Green Berets in Vietnam",
          "date": new Date("1965-10-18")
        },
        {
          "name": "Far from the Fame",
          "subject": "Hero of Czechoslovakia – Air Marshal Karel Janoušek, founder of Czechoslovakian forces in Royal Air Force. Later imprisoned by communist regime in Czechoslovakia.",
          "date": new Date("1971-10-27")
        },
        {
          "name": "Hearts of Iron",
          "subject": "The German forces of the 12th and 9th Armies, who, facing defeat at the hands of the Soviets, created a corridor across the Elbe to protect fleeing refugees and soldiers to escape and surrender to the West.",
          "date": new Date("1945-04-16")
        }
      ]
    },

    {
      "name": "The Last Stand",
      "tracks": [
        {
          "name": "Sparta",
          "subject": "Battle of Thermopylae",
          "wiki": "https://en.wikipedia.org/wiki/Battle_of_Thermopylae",
          "date": new Date("-000480-08-20"),
          "position": {
            "lat": 38.7993957,
            "lng": 22.5439554
          }
        },
        {
          "name": "Last Dying Breath",
          "subject": "Dragutin Gavrilović"
        },
        {
          "name": "Blood of Bannockburn",
          "subject": "Battle of Bannockburn",
          "position": {
            "lat": 56.0917202,
            "lng": -3.9085366
          }
        },
        {
          "name": "Diary of an Unknown Soldier",
          "subject": "Meuse-Argonne Offensive"
        },
        {
          "name": "The Lost Battalion",
          "subject": "Lost Battalion (World War I)"
        },
        {
          "name": "Rorke's Drift",
          "subject": "Battle of Rorke's Drift"
        },
        {
          "name": "The Last Stand",
          "subject": "Stand of the Swiss Guard",
          "date": new Date("1527-05-06"),
          "wiki": "https://en.wikipedia.org/wiki/Sack_of_Rome_(1527)"
        },
        {
          "name": "Hill 3234",
          "subject": "Battle for Hill 3234"
        },
        {
          "name": "Shiroyama",
          "subject": "Battle of Shiroyama",
          "wiki": "https://en.wikipedia.org/wiki/Battle_of_Shiroyama",
          "date": new Date("1877-09-24"),
          "position": {
            "lat": 35.2557992,
            "lng": 139.1489477
          }
        },
        {
          "name": "Winged Hussars",
          "subject": "Polish hussars/Battle of Vienna"
        },
        {
          "name": "The Last Battle",
          "subject": "Battle for Castle Itter",
          "wiki": "https://en.wikipedia.org/wiki/Battle_for_Castle_Itter",
          "date": new Date("1945-05-05")

        },
        {
          "name": "Camouflage (Stan Ridgway Cover) (Bonus Track)",
          "subject": "Vietnam War"
        },
        {
          "name": "All Guns Blazing (Judas Priest Cover) (Bonus Track)",
          "subject": ""
        },
        {
          "name": "Afraid To Shoot Strangers (Iron Maiden Cover) (Bonus Track - EARBOOK edition only)",
          "subject": ""
        },
        {
          "name": "Burn In Hell (Twisted Sister Cover) (Bonus Track - JAPAN only)",
          "subject": ""
        }
      ]
    }
  ]
};

