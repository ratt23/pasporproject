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
        children: [
            /* 1-1  Permohonan Baru */
            {
                id: "permohonan-baru",
                title: "Permohonan Baru",
                desc: "Paspor pertama kali",
                children: [
                    /* 1-1-1  Dewasa */
                    {
                        id: "paspor-dewasa",
                        title: "Paspor Dewasa",
                        desc: "Usia 17 tahun ke atas",
                        children: [
                            {
                                id: "dewasa-wni",
                                title: "WNI Dewasa",
                                desc: "Warga Negara Indonesia dewasa",
                                detail: [
                                    { title: "KTP Elektronik", note: "Asli & fotokopi" },
                                    { title: "Kartu Keluarga (KK)", note: "Asli & fotokopi" },
                                    { title: "Akta Kelahiran / Ijazah", note: "Pilih salah satu, asli & fotokopi" },
                                    { title: "Buku Nikah / Akta Perkawinan", note: "Jika sudah menikah" },
                                    { title: "Surat Pewarganegaraan", note: "Untuk WNI naturalisasi" },
                                    { title: "Pas Foto", note: "Latar belakang putih, 4×6 cm" },
                                ],
                            },
                        ],
                    },
                    /* 1-1-2  Anak */
                    {
                        id: "paspor-anak",
                        title: "Paspor Anak",
                        desc: "Usia di bawah 17 tahun",
                        children: [
                            {
                                id: "anak-wni",
                                title: "Anak WNI",
                                desc: "Anak berkewarganegaraan Indonesia",
                                detail: [
                                    { title: "Akta Kelahiran Anak", note: "Asli & fotokopi" },
                                    { title: "KK yang Memuat Nama Anak", note: "Asli & fotokopi" },
                                    { title: "KTP Orang Tua", note: "Asli & fotokopi (ayah & ibu)" },
                                    { title: "Paspor Orang Tua", note: "Asli (salah satu)" },
                                    { title: "Buku Nikah / Akta Perkawinan Orang Tua", note: "Asli & fotokopi" },
                                    { title: "Surat Persetujuan Orang Tua", note: "Bermeterai" },
                                    { title: "Pas Foto Anak", note: "Latar belakang putih, 4×6 cm" },
                                ],
                            },
                            {
                                id: "anak-berkewarganegaraan-ganda",
                                title: "Anak Berkewarganegaraan Ganda",
                                desc: "Anak dengan dwi kewarganegaraan",
                                detail: [
                                    { title: "Akta Kelahiran Anak", note: "Asli & fotokopi" },
                                    { title: "Paspor Asing Anak", note: "Asli & fotokopi" },
                                    { title: "KTP / Paspor Orang Tua WNI", note: "Asli & fotokopi" },
                                    { title: "Paspor Orang Tua WNA", note: "Asli & fotokopi" },
                                    { title: "Surat Keputusan Kewarganegaraan Ganda", note: "Dari Kemenkumham" },
                                    { title: "Buku Nikah / Akta Perkawinan Orang Tua", note: "Asli & fotokopi" },
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
                detail: [
                    { title: "Paspor Lama", note: "Asli" },
                    { title: "KTP Elektronik", note: "Asli & fotokopi" },
                    { title: "Kartu Keluarga (KK)", note: "Asli & fotokopi" },
                    { title: "Akta Kelahiran / Ijazah", note: "Pilih salah satu" },
                    { title: "Pas Foto", note: "Latar belakang putih, 4×6 cm" },
                ],
            },

            /* 1-3  Penggantian */
            {
                id: "penggantian-persyaratan",
                title: "Penggantian Paspor",
                desc: "Halaman penuh atau data berubah",
                detail: [
                    { title: "Paspor Lama", note: "Asli" },
                    { title: "KTP Elektronik", note: "Asli & fotokopi" },
                    { title: "Kartu Keluarga (KK)", note: "Asli & fotokopi" },
                    { title: "Dokumen Pendukung Perubahan", note: "Sesuai alasan penggantian" },
                    { title: "Pas Foto", note: "Latar belakang putih, 4×6 cm" },
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
        children: [
            {
                id: "permohonan-baru",
                title: "New Application",
                desc: "First time passport",
                children: [
                    {
                        id: "paspor-dewasa",
                        title: "Adult Passport",
                        desc: "17 years old and above",
                        children: [
                            {
                                id: "dewasa-wni",
                                title: "Adult Indonesian Citizen",
                                desc: "Adult Indonesian citizen",
                                detail: [
                                    { title: "Electronic ID Card (e-KTP)", note: "Original & photocopy" },
                                    { title: "Family Card (KK)", note: "Original & photocopy" },
                                    { title: "Birth Certificate / Diploma", note: "Choose one, original & photocopy" },
                                    { title: "Marriage Book / Marriage Certificate", note: "If married" },
                                    { title: "Citizenship Letter", note: "For naturalized citizens" },
                                    { title: "Passport Photo", note: "White background, 4×6 cm" },
                                ],
                            },
                        ],
                    },
                    {
                        id: "paspor-anak",
                        title: "Child Passport",
                        desc: "Under 17 years old",
                        children: [
                            {
                                id: "anak-wni",
                                title: "Indonesian Child",
                                desc: "Child with Indonesian citizenship",
                                detail: [
                                    { title: "Child's Birth Certificate", note: "Original & photocopy" },
                                    { title: "Family Card Containing Child's Name", note: "Original & photocopy" },
                                    { title: "Parents' ID Cards", note: "Original & photocopy (father & mother)" },
                                    { title: "Parents' Passport", note: "Original (at least one)" },
                                    { title: "Parents' Marriage Book / Certificate", note: "Original & photocopy" },
                                    { title: "Parents' Consent Letter", note: "With duty stamp" },
                                    { title: "Child's Passport Photo", note: "White background, 4×6 cm" },
                                ],
                            },
                            {
                                id: "anak-berkewarganegaraan-ganda",
                                title: "Dual Citizenship Child",
                                desc: "Child with dual citizenship",
                                detail: [
                                    { title: "Child's Birth Certificate", note: "Original & photocopy" },
                                    { title: "Child's Foreign Passport", note: "Original & photocopy" },
                                    { title: "Indonesian Parent's ID/Passport", note: "Original & photocopy" },
                                    { title: "Foreign Parent's Passport", note: "Original & photocopy" },
                                    { title: "Dual Citizenship Decree Letter", note: "From Ministry of Law and Human Rights" },
                                    { title: "Parents' Marriage Book / Certificate", note: "Original & photocopy" },
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
                detail: [
                    { title: "Old Passport", note: "Original" },
                    { title: "Electronic ID Card (e-KTP)", note: "Original & photocopy" },
                    { title: "Family Card (KK)", note: "Original & photocopy" },
                    { title: "Birth Certificate / Diploma", note: "Choose one" },
                    { title: "Passport Photo", note: "White background, 4×6 cm" },
                ],
            },
            {
                id: "penggantian-persyaratan",
                title: "Passport Replacement",
                desc: "Full pages or data change",
                detail: [
                    { title: "Old Passport", note: "Original" },
                    { title: "Electronic ID Card (e-KTP)", note: "Original & photocopy" },
                    { title: "Family Card (KK)", note: "Original & photocopy" },
                    { title: "Change Supporting Documents", note: "According to change reason" },
                    { title: "Passport Photo", note: "White background, 4×6 cm" },
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
