export const test = async () => {
  try {
    // var provinsi = await Provinsi.findAll({ where: { id_prov: "11" }, raw: true });
    var provinsi = await Provinsi.findAll({ raw: true });

    var regional = async () => {
      return await Promise.all(
        provinsi.map(async (prov) => {
          var provId = prov.id_prov;
          var provNama = prov.nama;

          var kabupaten = await Kabupaten.findAll({ where: { id_prov: provId }, raw: true });
          var kab = async () => {
            return await Promise.all(
              kabupaten.map(async (kab) => {
                var kabId = kab.id_kab;
                var kabNama = kab.nama;

                var kecamatan = await Kecamatan.findAll({ where: { id_kab: kabId }, raw: true });
                var kec = async () => {
                  return await Promise.all(
                    kecamatan.map(async (kec) => {
                      var kecId = kec.id_kec;
                      var kecNama = kec.nama;

                      var kelurahan = await Kelurahan.findAll({ where: { id_kec: kecId }, raw: true });
                      var kel = async () => {
                        return await Promise.all(
                          kelurahan.map(async (kel) => {
                            var kelId = kel.id_kel;
                            var kelNama = kel.nama;

                            console.log({
                              id: kelId,
                              nama: kelNama,
                            });

                            return {
                              id: kelId,
                              nama: kelNama,
                            };
                          })
                        );
                      };

                      return {
                        id: kecId,
                        nama: kecNama,
                        kelurahan: await kel(),
                      };
                    })
                  );
                };

                return {
                  id: kabId,
                  nama: kabNama,
                  kecamatan: await kec(),
                };
              })
            );
          };

          return {
            id: provId,
            nama: provNama,
            kabupaten: await kab(),
          };
        })
      );
    };

    return await regional();
  } catch (error) {
    console.log(error);
  }
};
