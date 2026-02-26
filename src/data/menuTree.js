/**
 * MENU_TREE — Panduan Paspor
 *
 * Schema per node:
 *   id       : string
 *   title    : string
 *   desc     : string?          — deskripsi singkat (tampil di card)
 *   iconKey  : string?          — key untuk lucide-react icon
 *   children : Node[]?          — sub-menu (drill-down)
 *   detail   : (string | { title, note? })[]?  — halaman detail cards
 */

export const SITE_TITLE_ID = "Panduan Paspor";
export const SITE_TITLE_EN = "Passport Guide";

export const MENU_TREE_ID = [
    /* ───────────────────────────── 1. PERSYARATAN PASPOR ── */
    {
        id: "persyaratan",
        title: "Persyaratan Paspor",
        desc: "Dokumen yang diperlukan untuk pengajuan paspor",
        iconKey: "ClipboardList",
        footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
        children: [
            /* 1-1  Permohonan Baru */
            {
                id: "permohonan-baru",
                title: "Permohonan Baru",
                desc: "Paspor pertama kali",
                children: [
                    /* 1-1-1  Paspor Dewasa */
                    {
                        id: "paspor-dewasa-baru",
                        title: "Paspor Dewasa (> 17 tahun)",
                        desc: "Usia 17 tahun ke atas",
                        detail: [
                            "KTP",
                            "KARTU KELUARGA",
                            "AKTA LAHIR/IJAZAH/BUKU NIKAH",
                        ],
                    },
                    /* 1-1-2  Paspor Anak */
                    {
                        id: "paspor-anak-baru",
                        title: "Paspor Anak (< 17 tahun)",
                        desc: "Usia di bawah 17 tahun",
                        children: [
                            {
                                id: "anak-wni-baru",
                                title: "Anak WNI",
                                desc: "Anak berkewarganegaraan Indonesia",
                                detail: [
                                    "KTP AYAH DAN IBU",
                                    "KARTU KELUARGA",
                                    "AKTA KELAHIRAN ANAK",
                                    "PASPOR AYAH DAN IBU (BAGI YANG SDH MEMILIKI)",
                                    "SURAT PERNYATAAN ORANG TUA*",
                                ],
                            },
                            {
                                id: "anak-ganda-baru",
                                title: "Anak Kewarganegaraan Ganda",
                                desc: "Anak dengan dwi kewarganegaraan",
                                detail: [
                                    "KTP AYAH/IBU YANG WNI",
                                    "KARTU KELUARGA",
                                    "AKTA PERKAWINAN/BUKU NIKAH ORG TUA",
                                    "AKTA KELAHIRAN ANAK",
                                    "IZIN TINGGAL AYAH/IBU YANG WNA",
                                    "PASPOR AYAH/IBU",
                                    "BUKTI AFFIDAVIT",
                                    "SURAT PERNYATAAN ORANG TUA*",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-baru",
                                title: "Anak WNI Domisili Luar Negeri",
                                desc: "Anak WNI yang berdomisili di luar negeri",
                                detail: [
                                    "PASPOR BIASA AYAH DAN IBU WNI",
                                    "AKTA KELAHIRAN/SURAT KETERANGAN LAHIR BAGI ANAK YANG LAHIR DI LUAR WILAYAH INDONESIA",
                                    "KARTU PENDUDUK/BUKTI/PETUNJUK/SURAT KETERANGAN DOMISILI DI NEGARA TERSEBUT",
                                ],
                            },
                        ],
                    },
                ],
            },

            /* 1-2  Perpanjangan */
            {
                id: "perpanjangan",
                title: "Perpanjangan Paspor",
                desc: "Paspor lama habis masa berlaku",
                children: [
                    /* 1-2-1  Paspor Dewasa */
                    {
                        id: "paspor-dewasa-perpanjangan",
                        title: "Paspor Dewasa (> 17 tahun)",
                        desc: "Usia 17 tahun ke atas",
                        detail: [
                            "KTP",
                            "KARTU KELUARGA",
                            "AKTA LAHIR/IJAZAH/BUKU NIKAH",
                            "PASPOR LAMA",
                        ],
                    },
                    /* 1-2-2  Paspor Anak */
                    {
                        id: "paspor-anak-perpanjangan",
                        title: "Paspor Anak (< 17 tahun)",
                        desc: "Usia di bawah 17 tahun",
                        children: [
                            {
                                id: "anak-wni-perpanjangan",
                                title: "Anak WNI",
                                desc: "Anak berkewarganegaraan Indonesia",
                                detail: [
                                    "KTP AYAH DAN IBU",
                                    "KARTU KELUARGA",
                                    "AKTA KELAHIRAN ANAK",
                                    "PASPOR AYAH DAN IBU (BAGI YANG SDH MEMILIKI)",
                                    "SURAT PERNYATAAN ORANG TUA*",
                                    "PASPOR LAMA",
                                ],
                            },
                            {
                                id: "anak-ganda-perpanjangan",
                                title: "Anak Kewarganegaraan Ganda",
                                desc: "Anak dengan dwi kewarganegaraan",
                                detail: [
                                    "KTP AYAH/IBU YANG WNI",
                                    "KARTU KELUARGA",
                                    "AKTA PERKAWINAN/BUKU NIKAH ORG TUA",
                                    "AKTA KELAHIRAN ANAK",
                                    "IZIN TINGGAL AYAH/IBU YANG WNA",
                                    "PASPOR AYAH/IBU",
                                    "BUKTI AFFIDAVIT",
                                    "SURAT PERNYATAAN ORANG TUA*",
                                    "PASPOR LAMA ANAK",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-perpanjangan",
                                title: "Anak WNI Domisili Luar Negeri",
                                desc: "Anak WNI yang berdomisili di luar negeri",
                                detail: [
                                    "PASPOR BIASA AYAH DAN IBU WNI",
                                    "AKTA KELAHIRAN/SURAT KETERANGAN LAHIR BAGI ANAK YANG LAHIR DI LUAR WILAYAH INDONESIA",
                                    "KARTU PENDUDUK/BUKTI/PETUNJUK/SURAT KETERANGAN DOMISILI DI NEGARA TERSEBUT",
                                    "PASPOR LAMA ANAK",
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },

    /* ───────────────────────────── 2. TARIF PNBP PASPOR ── */
    {
        id: "tarif",
        title: "Tarif PNBP Paspor",
        desc: "Biaya resmi pembuatan paspor",
        iconKey: "Banknote",
        detail: [
            { title: "Paspor Elektronik 5 Tahun", note: "Rp. 650.000" },
            { title: "Paspor Elektronik 10 Tahun", note: "Rp. 950.000" },
            { title: "Layanan Percepatan Selesai di Hari yang Sama", note: "Rp. 1.000.000 **" },
            { title: "Denda Paspor Hilang", note: "Rp. 1.000.000 **" },
            { title: "Denda Paspor Rusak", note: "Rp. 500.000 **" },
        ],
        footer: "** : Belum termasuk biaya paspor",
    },

    /* ─────────── 3. PENGGANTIAN PASPOR HILANG/RUSAK/PERUBAHAN DATA ── */
    {
        id: "penggantian",
        title: "Penggantian Paspor Hilang/Rusak/Perubahan Data",
        desc: "Prosedur penggantian paspor karena hilang, rusak, atau perubahan data",
        iconKey: "RefreshCw",
        children: [
            /* 3-1  Penggantian Paspor Hilang */
            {
                id: "hilang",
                title: "Penggantian Paspor Hilang",
                desc: "Prosedur jika paspor hilang",
                detail: [
                    "LAPORAN KEHILANGAN DARI PIHAK KEPOLISIAN",
                    "MELAPORKAN KE KANTOR IMIGRASI DENGAN MEMBAWA BERKAS PERSYARATAN ASLI",
                    "PROSES BAP OLEH PETUGAS",
                    "PERSETUJUAN KEPALA KANTOR/PEJABAT IMIGRASI",
                    "PROSES FOTO DAN BIOMETRIK",
                    "PERSETUJUAN DIREKTUR JENDERAL IMIGRASI",
                    "PENERBITAN PASPOR",
                    "PETUGAS MENGHUBUNGI PEMOHON JIKA PASPORNYA SUDAH BISA DIAMBIL"
                ],
            },

            /* 3-2  Penggantian Paspor Hilang Kahar */
            {
                id: "hilang-kahar",
                title: "Penggantian Paspor Hilang Kahar",
                desc: "Prosedur jika paspor hilang karena bencana kahar",
                detail: [
                    "SURAT KETERANGAN KEJADIAN KAHAR DARI KELURAHAN SETEMPAT",
                    "MELAPORKAN KE KANTOR IMIGRASI DENGAN MEMBAWA BERKAS PERSYARATAN ASLI",
                    "PROSES BAP OLEH PETUGAS",
                    "PERSETUJUAN KEPALA KANTOR/PEJABAT IMIGRASI",
                    "PROSES FOTO DAN BIOMETRIK",
                    "PERSETUJUAN DIREKTUR JENDERAL IMIGRASI",
                    "PENERBITAN PASPOR",
                    "PETUGAS MENGHUBUNGI PEMOHON JIKA PASPORNYA SUDAH BISA DIAMBIL"
                ],
            },

            /* 3-3  Penggantian Paspor Rusak */
            {
                id: "rusak",
                title: "Penggantian Paspor Rusak",
                desc: "Prosedur jika paspor rusak",
                detail: [
                    "PASPOR LAMA YANG RUSAK",
                    "MELAPORKAN KE KANTOR IMIGRASI DENGAN MEMBAWA BERKAS PERSYARATAN ASLI",
                    "PROSES BAP OLEH PETUGAS",
                    "PERSETUJUAN KEPALA KANTOR/PEJABAT IMIGRASI",
                    "PROSES FOTO DAN BIOMETRIK",
                    "PERSETUJUAN DIREKTUR JENDERAL IMIGRASI",
                    "PENERBITAN PASPOR",
                    "PETUGAS MENGHUBUNGI PEMOHON JIKA PASPORNYA SUDAH BISA DIAMBIL"
                ],
            },

            /* 3-4  Penggantian Paspor Rusak Kahar */
            {
                id: "rusak-kahar",
                title: "Penggantian Paspor Rusak Kahar",
                desc: "Prosedur jika paspor rusak karena bencana kahar",
                detail: [
                    "PASPOR LAMA YANG RUSAK",
                    "SURAT KETERANGAN KEJADIAN KAHAR DARI KELURAHAN SETEMPAT",
                    "MELAPORKAN KE KANTOR IMIGRASI DENGAN MEMBAWA BERKAS PERSYARATAN ASLI",
                    "PROSES BAP OLEH PETUGAS",
                    "PERSETUJUAN KEPALA KANTOR/PEJABAT IMIGRASI",
                    "PROSES FOTO DAN BIOMETRIK",
                    "PERSETUJUAN DIREKTUR JENDERAL IMIGRASI",
                    "PENERBITAN PASPOR",
                    "PETUGAS MENGHUBUNGI PEMOHON JIKA PASPORNYA SUDAH BISA DIAMBIL"
                ],
            },

            /* 3-5  Perubahan Data */
            {
                id: "perubahan-data",
                title: "Perubahan Data",
                desc: "Nama, alamat, atau data lain berubah",
                detail: [
                    "PASPOR LAMA",
                    "SURAT PENETAPAN PENGADILAN TENTANG PERUBAHAN DATA",
                    "MELAPORKAN KE KANTOR IMIGRASI DENGAN MEMBAWA BERKAS PERSYARATAN ASLI",
                    "PROSES BAP OLEH PETUGAS",
                    "PERSETUJUAN KEPALA KANTOR/PEJABAT IMIGRASI",
                    "PROSES FOTO DAN BIOMETRIK",
                    "PERSETUJUAN DIREKTUR JENDERAL IMIGRASI",
                    "PENERBITAN PASPOR",
                    "PETUGAS MENGHUBUNGI PEMOHON JIKA PASPORNYA SUDAH BISA DIAMBIL"
                ],
            },
        ],
    },

    /* ───────────────────────────── 4. SYARAT PENGAMBILAN PASPOR ── */
    {
        id: "pengambilan",
        title: "Syarat Pengambilan Paspor",
        desc: "Ketentuan saat mengambil paspor",
        iconKey: "PackageCheck",
        children: [
            /* 4-1  Pemohon */
            {
                id: "pemohon",
                title: "Pemohon",
                desc: "Pengambilan oleh pemohon sendiri",
                detail: [
                    "TANDA BUKTI PEMBAYARAN",
                    "KTP",
                ],
            },

            /* 4-2  Orang Lain dalam 1 KK */
            {
                id: "dalam-1-kk",
                title: "Orang Lain dalam 1 Kartu Keluarga",
                desc: "Pengambilan oleh anggota keluarga dalam 1 KK",
                detail: [
                    "TANDA BUKTI PEMBAYARAN",
                    "KTP",
                    "FOTOKOPI KARTU KELUARGA",
                ],
            },

            /* 4-3  Orang Lain tidak dalam 1 KK */
            {
                id: "tidak-dalam-1-kk",
                title: "Orang Lain Tidak dalam 1 Kartu Keluarga",
                desc: "Pengambilan oleh orang lain di luar KK",
                detail: [
                    "TANDA BUKTI PEMBAYARAN",
                    "KTP",
                    "FOTOKOPI KARTU KELUARGA",
                    "SURAT KUASA BERMETERAI 10.000",
                ],
            },
        ],
    },
];

export const MENU_TREE_EN = [
    {
        id: "persyaratan",
        title: "Passport Requirements",
        desc: "Documents required for passport application",
        iconKey: "ClipboardList",
        footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
        children: [
            {
                id: "permohonan-baru",
                title: "New Application",
                desc: "First time passport",
                children: [
                    {
                        id: "paspor-dewasa-baru",
                        title: "Adult Passport (> 17 years)",
                        desc: "17 years old and above",
                        detail: [
                            "ID CARD (KTP)",
                            "FAMILY CARD",
                            "BIRTH CERTIFICATE/DIPLOMA/MARRIAGE BOOK",
                        ],
                    },
                    {
                        id: "paspor-anak-baru",
                        title: "Child Passport (< 17 years)",
                        desc: "Under 17 years old",
                        children: [
                            {
                                id: "anak-wni-baru",
                                title: "Indonesian Child",
                                desc: "Child with Indonesian citizenship",
                                detail: [
                                    "FATHER AND MOTHER'S ID CARD (KTP)",
                                    "FAMILY CARD",
                                    "CHILD'S BIRTH CERTIFICATE",
                                    "FATHER AND MOTHER'S PASSPORT (IF AVAILABLE)",
                                    "PARENTAL CONSENT LETTER*",
                                ],
                            },
                            {
                                id: "anak-ganda-baru",
                                title: "Dual Citizenship Child",
                                desc: "Child with dual citizenship",
                                detail: [
                                    "INDONESIAN PARENT'S ID CARD (KTP)",
                                    "FAMILY CARD",
                                    "PARENTS' MARRIAGE CERTIFICATE/BOOK",
                                    "CHILD'S BIRTH CERTIFICATE",
                                    "FOREIGN PARENT'S RESIDENCE PERMIT",
                                    "PARENTS' PASSPORT",
                                    "AFFIDAVIT PROOF",
                                    "PARENTAL CONSENT LETTER*",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-baru",
                                title: "Overseas Indonesian Child",
                                desc: "Indonesian child residing abroad",
                                detail: [
                                    "INDONESIAN PARENTS' ORDINARY PASSPORT",
                                    "BIRTH CERTIFICATE FOR CHILD BORN OUTSIDE INDONESIA",
                                    "RESIDENT CARD/PROOF/CERTIFICATE OF DOMICILE IN THE COUNTRY",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: "perpanjangan",
                title: "Passport Renewal",
                desc: "Old passport expired",
                children: [
                    {
                        id: "paspor-dewasa-perpanjangan",
                        title: "Adult Passport (> 17 years)",
                        desc: "17 years old and above",
                        detail: [
                            "ID CARD (KTP)",
                            "FAMILY CARD",
                            "BIRTH CERTIFICATE/DIPLOMA/MARRIAGE BOOK",
                            "OLD PASSPORT",
                        ],
                    },
                    {
                        id: "paspor-anak-perpanjangan",
                        title: "Child Passport (< 17 years)",
                        desc: "Under 17 years old",
                        children: [
                            {
                                id: "anak-wni-perpanjangan",
                                title: "Indonesian Child",
                                desc: "Child with Indonesian citizenship",
                                detail: [
                                    "FATHER AND MOTHER'S ID CARD (KTP)",
                                    "FAMILY CARD",
                                    "CHILD'S BIRTH CERTIFICATE",
                                    "FATHER AND MOTHER'S PASSPORT (IF AVAILABLE)",
                                    "PARENTAL CONSENT LETTER*",
                                    "OLD PASSPORT",
                                ],
                            },
                            {
                                id: "anak-ganda-perpanjangan",
                                title: "Dual Citizenship Child",
                                desc: "Child with dual citizenship",
                                detail: [
                                    "INDONESIAN PARENT'S ID CARD (KTP)",
                                    "FAMILY CARD",
                                    "PARENTS' MARRIAGE CERTIFICATE/BOOK",
                                    "CHILD'S BIRTH CERTIFICATE",
                                    "FOREIGN PARENT'S RESIDENCE PERMIT",
                                    "PARENTS' PASSPORT",
                                    "AFFIDAVIT PROOF",
                                    "PARENTAL CONSENT LETTER*",
                                    "CHILD'S OLD PASSPORT",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-perpanjangan",
                                title: "Overseas Indonesian Child",
                                desc: "Indonesian child residing abroad",
                                detail: [
                                    "INDONESIAN PARENTS' ORDINARY PASSPORT",
                                    "BIRTH CERTIFICATE FOR CHILD BORN OUTSIDE INDONESIA",
                                    "RESIDENT CARD/PROOF/CERTIFICATE OF DOMICILE IN THE COUNTRY",
                                    "CHILD'S OLD PASSPORT",
                                ],
                            },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: "tarif",
        title: "Passport PNBP Tariff",
        desc: "Official passport making fee",
        iconKey: "Banknote",
        detail: [
            { title: "5-Year Electronic Passport", note: "Rp. 650,000" },
            { title: "10-Year Electronic Passport", note: "Rp. 950,000" },
            { title: "Same-Day Expedited Service", note: "Rp. 1,000,000 **" },
            { title: "Lost Passport Penalty", note: "Rp. 1,000,000 **" },
            { title: "Damaged Passport Penalty", note: "Rp. 500,000 **" },
        ],
        footer: "** : Does not include passport fee",
    },
    {
        id: "penggantian",
        title: "Replacement of Lost/Damaged/Data Change Passport",
        desc: "Procedure due to lost, damaged, or data change",
        iconKey: "RefreshCw",
        children: [
            {
                id: "hilang",
                title: "Lost Passport Replacement",
                desc: "Procedure if passport is lost",
                detail: [
                    "LOSS REPORT FROM THE POLICE",
                    "REPORT TO IMMIGRATION OFFICE BRINGING ORIGINAL REQUIREMENT DOCUMENTS",
                    "BAP PROCESS BY OFFICER",
                    "APPROVAL FROM THE HEAD OF OFFICE/IMMIGRATION OFFICIAL",
                    "PHOTO AND BIOMETRIC PROCESS",
                    "APPROVAL FROM THE DIRECTOR GENERAL OF IMMIGRATION",
                    "PASSPORT ISSUANCE",
                    "OFFICER CONTACTS APPLICANT WHEN PASSPORT IS READY FOR COLLECTION"
                ],
            },
            {
                id: "hilang-kahar",
                title: "Force Majeure Lost Passport Replacement",
                desc: "Procedure if passport is lost due to force majeure",
                detail: [
                    "FORCE MAJEURE INCIDENT CERTIFICATE FROM LOCAL SUB-DISTRICT HEAD",
                    "REPORT TO IMMIGRATION OFFICE BRINGING ORIGINAL REQUIREMENT DOCUMENTS",
                    "BAP PROCESS BY OFFICER",
                    "APPROVAL FROM THE HEAD OF OFFICE/IMMIGRATION OFFICIAL",
                    "PHOTO AND BIOMETRIC PROCESS",
                    "APPROVAL FROM THE DIRECTOR GENERAL OF IMMIGRATION",
                    "PASSPORT ISSUANCE",
                    "OFFICER CONTACTS APPLICANT WHEN PASSPORT IS READY FOR COLLECTION"
                ],
            },
            {
                id: "rusak",
                title: "Damaged Passport Replacement",
                desc: "Procedure if passport is damaged",
                detail: [
                    "DAMAGED OLD PASSPORT",
                    "REPORT TO IMMIGRATION OFFICE BRINGING ORIGINAL REQUIREMENT DOCUMENTS",
                    "BAP PROCESS BY OFFICER",
                    "APPROVAL FROM THE HEAD OF OFFICE/IMMIGRATION OFFICIAL",
                    "PHOTO AND BIOMETRIC PROCESS",
                    "APPROVAL FROM THE DIRECTOR GENERAL OF IMMIGRATION",
                    "PASSPORT ISSUANCE",
                    "OFFICER CONTACTS APPLICANT WHEN PASSPORT IS READY FOR COLLECTION"
                ],
            },
            {
                id: "rusak-kahar",
                title: "Force Majeure Damaged Passport Replacement",
                desc: "Procedure if passport is damaged due to force majeure",
                detail: [
                    "DAMAGED OLD PASSPORT",
                    "FORCE MAJEURE INCIDENT CERTIFICATE FROM LOCAL SUB-DISTRICT HEAD",
                    "REPORT TO IMMIGRATION OFFICE BRINGING ORIGINAL REQUIREMENT DOCUMENTS",
                    "BAP PROCESS BY OFFICER",
                    "APPROVAL FROM THE HEAD OF OFFICE/IMMIGRATION OFFICIAL",
                    "PHOTO AND BIOMETRIC PROCESS",
                    "APPROVAL FROM THE DIRECTOR GENERAL OF IMMIGRATION",
                    "PASSPORT ISSUANCE",
                    "OFFICER CONTACTS APPLICANT WHEN PASSPORT IS READY FOR COLLECTION"
                ],
            },
            {
                id: "perubahan-data",
                title: "Data Change",
                desc: "Name, address, or other data changed",
                detail: [
                    "OLD PASSPORT",
                    "COURT DECREE LETTER REGARDING DATA CHANGE",
                    "REPORT TO IMMIGRATION OFFICE BRINGING ORIGINAL REQUIREMENT DOCUMENTS",
                    "BAP PROCESS BY OFFICER",
                    "APPROVAL FROM THE HEAD OF OFFICE/IMMIGRATION OFFICIAL",
                    "PHOTO AND BIOMETRIC PROCESS",
                    "APPROVAL FROM THE DIRECTOR GENERAL OF IMMIGRATION",
                    "PASSPORT ISSUANCE",
                    "OFFICER CONTACTS APPLICANT WHEN PASSPORT IS READY FOR COLLECTION"
                ],
            },
        ],
    },
    {
        id: "pengambilan",
        title: "Passport Collection Requirements",
        desc: "Conditions when collecting passport",
        iconKey: "PackageCheck",
        children: [
            {
                id: "pemohon",
                title: "Applicant",
                desc: "Collection by the applicant",
                detail: [
                    "PAYMENT RECEIPT",
                    "ID CARD (KTP)",
                ],
            },
            {
                id: "dalam-1-kk",
                title: "Family Member in Same Household",
                desc: "Collection by family member in same family card",
                detail: [
                    "PAYMENT RECEIPT",
                    "ID CARD (KTP)",
                    "PHOTOCOPY OF FAMILY CARD",
                ],
            },
            {
                id: "tidak-dalam-1-kk",
                title: "Non-Family Member",
                desc: "Collection by someone outside the family card",
                detail: [
                    "PAYMENT RECEIPT",
                    "ID CARD (KTP)",
                    "PHOTOCOPY OF FAMILY CARD",
                    "POWER OF ATTORNEY WITH Rp. 10,000 STAMP DUTY",
                ],
            },
        ],
    },
];
