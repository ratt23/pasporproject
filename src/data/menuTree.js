import iconPersyaratan from "../assets/icons/persyaratan.png";
import iconTarif from "../assets/icons/tarif.png";
import iconPenggantian from "../assets/icons/penggantian.png";
import iconPekerjaStudi from "../assets/icons/pekerja_studi.png";
import iconTutorial from "../assets/icons/tutorial.png";
import iconOnlineHilang from "../assets/icons/online_hilang.png";
import iconPengambilan from "../assets/icons/pengambilan.png";
import qrcodeImg from "../assets/qrcode.jpeg";

export const SITE_TITLE_ID = "Klik-Info";
export const SITE_TITLE_EN = "Klik-Info";

export const MENU_TREE_ID = [
    {
        id: "persyaratan",
        title: "Persyaratan Paspor",
        desc: "Dokumen yang diperlukan untuk pengajuan paspor",
        iconSrc: iconPersyaratan,
        footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
        children: [
            {
                id: "permohonan-baru",
                title: "Permohonan Baru",
                desc: "Paspor pertama kali",
                footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
                children: [
                    {
                        id: "paspor-dewasa-baru",
                        title: "Paspor Dewasa (> 17 tahun)",
                        desc: "Usia 17 tahun ke atas",
                        footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
                        detail: [
                            "KTP",
                            "Kartu Keluarga",
                            "Akta Lahir / Ijazah / Buku Nikah",
                        ],
                    },
                    {
                        id: "paspor-anak-baru",
                        title: "Paspor Anak (< 17 tahun)",
                        desc: "Usia di bawah 17 tahun",
                        footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
                        children: [
                            {
                                id: "anak-wni-baru",
                                title: "Anak WNI",
                                desc: "Anak berkewarganegaraan Indonesia",
                                detail: [
                                    "KTP Ayah dan Ibu",
                                    "Kartu Keluarga",
                                    "Akta Kelahiran Anak",
                                    "Paspor Ayah dan Ibu (Bagi yang sudah memiliki)",
                                    "Surat Pernyataan Orang Tua*",
                                ],
                            },
                            {
                                id: "anak-ganda-baru",
                                title: "Anak Kewarganegaraan Ganda",
                                desc: "Anak dengan dwi kewarganegaraan",
                                detail: [
                                    "KTP Ayah/Ibu yang WNI",
                                    "Kartu Keluarga",
                                    "Akta Perkawinan / Buku Nikah Orang Tua",
                                    "Akta Kelahiran Anak",
                                    "Izin Tinggal Ayah/Ibu yang WNA",
                                    "Paspor Ayah/Ibu",
                                    "Bukti Affidavit",
                                    "Surat Pernyataan Orang Tua*",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-baru",
                                title: "Anak WNI Domisili Luar Negeri",
                                desc: "Anak WNI yang berdomisili di luar negeri",
                                detail: [
                                    "Paspor Biasa Ayah dan Ibu WNI",
                                    "Akta Kelahiran / Surat Keterangan Lahir bagi anak yang lahir di luar wilayah Indonesia",
                                    "Kartu Penduduk / Bukti / Petunjuk / Surat Keterangan Domisili di negara tersebut",
                                ],
                            },
                        ],
                    },
                ],
            },
            {
                id: "perpanjangan",
                title: "Penggantian Paspor",
                desc: "Paspor lama habis masa berlaku",
                footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
                children: [
                    {
                        id: "paspor-dewasa-perpanjangan",
                        title: "Paspor Dewasa (> 17 tahun)",
                        desc: "Usia 17 tahun ke atas",
                        footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
                        detail: [
                            "KTP",
                            "Kartu Keluarga",
                            "Akta Lahir / Ijazah / Buku Nikah",
                            "Paspor Lama",
                        ],
                    },
                    {
                        id: "paspor-anak-perpanjangan",
                        title: "Paspor Anak (< 17 tahun)",
                        desc: "Usia di bawah 17 tahun",
                        footer: "Petugas wawancara berhak meminta dokumen pendukung apabila ditemukan indikasi penyalahgunaan paspor berdasarkan hasil keterangan pemohon saat wawancara\n\n*berdasarkan Surat Edaran Ditjen Imigrasi Nomor IMI-1308.GR.01.01 Tahun 2024 tentang Pencegahan Tindak Pidana Perdagangan Orang dalam Penerbitan Paspor Biasa",
                        children: [
                            {
                                id: "anak-wni-perpanjangan",
                                title: "Anak WNI",
                                desc: "Anak berkewarganegaraan Indonesia",
                                detail: [
                                    "KTP Ayah dan Ibu",
                                    "Kartu Keluarga",
                                    "Akta Kelahiran Anak",
                                    "Paspor Ayah dan Ibu (Bagi yang sudah memiliki)",
                                    "Surat Pernyataan Orang Tua*",
                                    "Paspor Lama",
                                ],
                            },
                            {
                                id: "anak-ganda-perpanjangan",
                                title: "Anak Kewarganegaraan Ganda",
                                desc: "Anak dengan dwi kewarganegaraan",
                                detail: [
                                    "KTP Ayah/Ibu yang WNI",
                                    "Kartu Keluarga",
                                    "Akta Perkawinan / Buku Nikah Orang Tua",
                                    "Akta Kelahiran Anak",
                                    "Izin Tinggal Ayah/Ibu yang WNA",
                                    "Paspor Ayah/Ibu",
                                    "Bukti Affidavit",
                                    "Surat Pernyataan Orang Tua*",
                                    "Paspor Lama Anak",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-perpanjangan",
                                title: "Anak WNI Domisili Luar Negeri",
                                desc: "Anak WNI yang berdomisili di luar negeri",
                                detail: [
                                    "Paspor Biasa Ayah dan Ibu WNI",
                                    "Akta Kelahiran / Surat Keterangan Lahir bagi anak yang lahir di luar wilayah Indonesia",
                                    "Kartu Penduduk / Bukti / Petunjuk / Surat Keterangan Domisili di negara tersebut",
                                    "Paspor Lama Anak",
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
        title: "Tarif PNBP Paspor",
        desc: "Biaya resmi pembuatan paspor",
        iconSrc: iconTarif,
        detail: [
            { title: "Paspor Elektronik 5 Tahun", note: "Rp. 650.000" },
            { title: "Paspor Elektronik 10 Tahun", note: "Rp. 950.000" },
            { title: "Layanan Percepatan Selesai di Hari yang Sama", note: "Rp. 1.000.000 **" },
            { title: "Denda Paspor Hilang", note: "Rp. 1.000.000 **" },
            { title: "Denda Paspor Rusak", note: "Rp. 500.000 **" },
        ],
        footer: "** : Belum termasuk biaya paspor",
    },
    {
        id: "penggantian",
        title: "Penggantian Paspor Hilang/Rusak/Perubahan Data",
        desc: "Prosedur penggantian paspor karena hilang, rusak, atau perubahan data",
        iconSrc: iconPenggantian,
        children: [
            {
                id: "hilang",
                title: "Penggantian Paspor Hilang",
                desc: "Prosedur jika paspor hilang",
                detail: [
                    "Laporan Kehilangan dari pihak Kepolisian",
                    "Melaporkan ke Kantor Imigrasi dengan membawa berkas persyaratan asli",
                    "Proses BAP oleh Petugas",
                    "Persetujuan Kepala Kantor / Pejabat Imigrasi",
                    "Proses Foto dan Biometrik",
                    "Persetujuan Direktur Jenderal Imigrasi",
                    "Penerbitan Paspor",
                    "Petugas menghubungi pemohon jika paspornya sudah bisa diambil"
                ],
            },
            {
                id: "hilang-kahar",
                title: "Penggantian Paspor Hilang Kahar",
                desc: "Prosedur jika paspor hilang karena bencana kahar",
                detail: [
                    "Surat Keterangan Kejadian Kahar dari Kelurahan setempat",
                    "Melaporkan ke Kantor Imigrasi dengan membawa berkas persyaratan asli",
                    "Proses BAP oleh Petugas",
                    "Persetujuan Kepala Kantor / Pejabat Imigrasi",
                    "Proses Foto dan Biometrik",
                    "Persetujuan Direktur Jenderal Imigrasi",
                    "Penerbitan Paspor",
                    "Petugas menghubungi pemohon jika paspornya sudah bisa diambil"
                ],
            },
            {
                id: "rusak",
                title: "Penggantian Paspor Rusak",
                desc: "Prosedur jika paspor rusak",
                detail: [
                    "Paspor Lama yang rusak",
                    "Melaporkan ke Kantor Imigrasi dengan membawa berkas persyaratan asli",
                    "Proses BAP oleh Petugas",
                    "Persetujuan Kepala Kantor / Pejabat Imigrasi",
                    "Proses Foto dan Biometrik",
                    "Persetujuan Direktur Jenderal Imigrasi",
                    "Penerbitan Paspor",
                    "Petugas menghubungi pemohon jika paspornya sudah bisa diambil"
                ],
            },
            {
                id: "rusak-kahar",
                title: "Penggantian Paspor Rusak Kahar",
                desc: "Prosedur jika paspor rusak karena bencana kahar",
                detail: [
                    "Paspor Lama yang rusak",
                    "Surat Keterangan Kejadian Kahar dari Kelurahan setempat",
                    "Melaporkan ke Kantor Imigrasi dengan membawa berkas persyaratan asli",
                    "Proses BAP oleh Petugas",
                    "Persetujuan Kepala Kantor / Pejabat Imigrasi",
                    "Proses Foto dan Biometrik",
                    "Persetujuan Direktur Jenderal Imigrasi",
                    "Penerbitan Paspor",
                    "Petugas menghubungi pemohon jika paspornya sudah bisa diambil"
                ],
            },
            {
                id: "perubahan-data",
                title: "Perubahan Data",
                desc: "Nama, alamat, atau data lain berubah",
                detail: [
                    "Paspor Lama",
                    "Surat Penetapan Pengadilan tentang perubahan data",
                    "Melaporkan ke Kantor Imigrasi dengan membawa berkas persyaratan asli",
                    "Proses BAP oleh Petugas",
                    "Persetujuan Kepala Kantor / Pejabat Imigrasi",
                    "Proses Foto dan Biometrik",
                    { title: "Persetujuan Direktur Jenderal Imigrasi", note: "Estimasi waktu tidak bisa ditentukan", italicNote: true },
                    "Penerbitan Paspor",
                    "Petugas menghubungi pemohon jika paspornya sudah bisa diambil"
                ],
            },
        ],
    },
    {
        id: "persyaratan-pekerja-studi",
        title: "Persyaratan Paspor untuk Pekerja & Studi",
        desc: "Dokumen yang diperlukan untuk pekerja dan studi",
        iconSrc: iconPekerjaStudi,
        children: []
    },
    {
        id: "pengajuan-online",
        title: "Cara Pengajuan Online BAP Paspor Hilang/Rusak",
        desc: "Panduan pengajuan paspor secara online",
        iconSrc: iconOnlineHilang,
        children: [
            {
                id: "ketentuan-bap",
                title: "Ketentuan Paspor Rusak/Hilang/Perubahan Data",
                desc: "Ketentuan mengenai paspor rusak, hilang, atau perubahan data",
                detail: [
                    { title: "PASPOR RUSAK", note: "Paspor rusak meliputi sobek, berlubang, dicoret, basah, atau terlipat." },
                    { title: "PASPOR HILANG", note: "Kehilangan paspor dapat terjadi akibat kelalaian dalam menjaga atau menyimpan paspor, maupun karena kejadian di luar kendali pemegang paspor." },
                    { title: "PASPOR PERBEDAAN DATA", note: "Perbedaan data yang dimaksud antara lain meliputi nama, tempat atau tanggal lahir, jenis kelamin, maupun data lainnya yang tidak sesuai dengan dokumen pendukung." }
                ]
            },
            {
                id: "cara-pengajuan-bap-online",
                title: "Cara Pengajuan BAP Online",
                desc: "Panduan cara pengajuan BAP online",
                detail: [
                    { isImage: true, src: qrcodeImg }
                ]
            }
        ]
    },
    {
        id: "tutorial-mpaspor",
        title: "Tutorial Pendaftaran M-Paspor",
        desc: "Hanya berlaku untuk permohonan paspor baru dan penggantian paspor habis masa berlaku",
        iconSrc: iconTutorial,
        children: [
            {
                id: "tutorial-pembuatan-akun",
                title: "Pembuatan Akun",
                desc: "Tutorial pembuatan akun M-Paspor",
                detail: [
                    { isVideo: true, src: "https://drive.google.com/file/d/1tHPV0SY-VLlCYvavEg1j6Ly0sIHwn3kV/view?usp=sharing" }
                ]
            },
            {
                id: "tutorial-langkah",
                title: "Langkah-Langkah Pendaftaran",
                desc: "Langkah pendaftaran di aplikasi M-Paspor",
                detail: [
                    { isVideo: true, src: "" }
                ]
            },
            {
                id: "tutorial-reschedule",
                title: "Reschedule Permohonan",
                desc: "Ketentuan reschedule permohonan",
                detail: [
                    "Pemohon dapat mengajukan reschedule permohonan dengan ketentuan:",
                    "Reschedule hanya untuk permohonan yang sudah terbayarkan",
                    "Pemohon tidak dapat melakukan reschedule dengan tanggal yang sama dengan permohonan awal",
                    "Reschedule maksimal 1 x dan hanya 30 hari dari tanggal permohonan awal"
                ]
            }
        ]
    },
    {
        id: "pengambilan",
        title: "Syarat Pengambilan Paspor",
        desc: "Ketentuan saat mengambil paspor",
        iconSrc: iconPengambilan,
        children: [
            {
                id: "pemohon",
                title: "Pemohon",
                desc: "Pengambilan oleh pemohon sendiri",
                detail: [
                    "Tanda Bukti Pembayaran",
                    "KTP",
                ],
            },
            {
                id: "dalam-1-kk",
                title: "Orang Lain dalam 1 Kartu Keluarga",
                desc: "Pengambilan oleh anggota keluarga dalam 1 KK",
                detail: [
                    "Tanda Bukti Pembayaran",
                    "KTP",
                    "Fotokopi Kartu Keluarga",
                ],
            },
            {
                id: "tidak-dalam-1-kk",
                title: "Orang Lain Tidak dalam 1 Kartu Keluarga",
                desc: "Pengambilan oleh orang lain di luar KK",
                detail: [
                    "Tanda Bukti Pembayaran",
                    "KTP",
                    "Fotokopi Kartu Keluarga",
                    "Surat Kuasa Bermeterai Rp 10.000",
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
        iconSrc: iconPersyaratan,
        footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
        children: [
            {
                id: "permohonan-baru",
                title: "New Application",
                desc: "First time passport",
                footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
                children: [
                    {
                        id: "paspor-dewasa-baru",
                        title: "Adult Passport (> 17 years)",
                        desc: "17 years old and above",
                        footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
                        detail: [
                            "ID Card (KTP)",
                            "Family Card",
                            "Birth Certificate / Diploma / Marriage Book",
                        ],
                    },
                    {
                        id: "paspor-anak-baru",
                        title: "Child Passport (< 17 years)",
                        desc: "Under 17 years old",
                        footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
                        children: [
                            {
                                id: "anak-wni-baru",
                                title: "Indonesian Child",
                                desc: "Child with Indonesian citizenship",
                                detail: [
                                    "Father and Mother's ID Card (KTP)",
                                    "Family Card",
                                    "Child's Birth Certificate",
                                    "Father and Mother's Passport (if available)",
                                    "Parental Consent Letter*",
                                ],
                            },
                            {
                                id: "anak-ganda-baru",
                                title: "Dual Citizenship Child",
                                desc: "Child with dual citizenship",
                                detail: [
                                    "Indonesian Parent's ID Card (KTP)",
                                    "Family Card",
                                    "Parents' Marriage Certificate/Book",
                                    "Child's Birth Certificate",
                                    "Foreign Parent's Residence Permit",
                                    "Parents' Passport",
                                    "Affidavit Proof",
                                    "Parental Consent Letter*",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-baru",
                                title: "Overseas Indonesian Child",
                                desc: "Indonesian child residing abroad",
                                detail: [
                                    "Indonesian Parents' Ordinary Passport",
                                    "Birth Certificate for child born outside Indonesia",
                                    "Resident Card / Proof / Certificate of Domicile in the country",
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
                footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
                children: [
                    {
                        id: "paspor-dewasa-perpanjangan",
                        title: "Adult Passport (> 17 years)",
                        desc: "17 years old and above",
                        footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
                        detail: [
                            "ID Card (KTP)",
                            "Family Card",
                            "Birth Certificate / Diploma / Marriage Book",
                            "Old Passport",
                        ],
                    },
                    {
                        id: "paspor-anak-perpanjangan",
                        title: "Child Passport (< 17 years)",
                        desc: "Under 17 years old",
                        footer: "The interview officer reserves the right to request supporting documents if there is an indication of passport misuse based on the applicant's statement during the interview\n\n*based on the Circular Letter of the Directorate General of Immigration Number IMI-1308.GR.01.01 Year 2024 concerning the Prevention of the Crime of Trafficking in Persons in the Issuance of Ordinary Passports",
                        children: [
                            {
                                id: "anak-wni-perpanjangan",
                                title: "Indonesian Child",
                                desc: "Child with Indonesian citizenship",
                                detail: [
                                    "Father and Mother's ID Card (KTP)",
                                    "Family Card",
                                    "Child's Birth Certificate",
                                    "Father and Mother's Passport (if available)",
                                    "Parental Consent Letter*",
                                    "Old Passport",
                                ],
                            },
                            {
                                id: "anak-ganda-perpanjangan",
                                title: "Dual Citizenship Child",
                                desc: "Child with dual citizenship",
                                detail: [
                                    "Indonesian Parent's ID Card (KTP)",
                                    "Family Card",
                                    "Parents' Marriage Certificate/Book",
                                    "Child's Birth Certificate",
                                    "Foreign Parent's Residence Permit",
                                    "Parents' Passport",
                                    "Affidavit Proof",
                                    "Parental Consent Letter*",
                                    "Child's Old Passport",
                                ],
                            },
                            {
                                id: "anak-luar-negeri-perpanjangan",
                                title: "Overseas Indonesian Child",
                                desc: "Indonesian child residing abroad",
                                detail: [
                                    "Indonesian Parents' Ordinary Passport",
                                    "Birth Certificate for child born outside Indonesia",
                                    "Resident Card / Proof / Certificate of Domicile in the country",
                                    "Child's Old Passport",
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
        iconSrc: iconTarif,
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
        iconSrc: iconPenggantian,
        children: [
            {
                id: "hilang",
                title: "Lost Passport Replacement",
                desc: "Procedure if passport is lost",
                detail: [
                    "Loss Report from the Police",
                    "Report to Immigration Office bringing original requirement documents",
                    "BAP Process by Officer",
                    "Approval from the Head of Office/Immigration Official",
                    "Photo and Biometric Process",
                    "Approval from the Director General of Immigration",
                    "Passport Issuance",
                    "Officer contacts applicant when passport is ready for collection"
                ],
            },
            {
                id: "hilang-kahar",
                title: "Force Majeure Lost Passport Replacement",
                desc: "Procedure if passport is lost due to force majeure",
                detail: [
                    "Force Majeure Incident Certificate from local Sub-District Head",
                    "Report to Immigration Office bringing original requirement documents",
                    "BAP Process by Officer",
                    "Approval from the Head of Office/Immigration Official",
                    "Photo and Biometric Process",
                    "Approval from the Director General of Immigration",
                    "Passport Issuance",
                    "Officer contacts applicant when passport is ready for collection"
                ],
            },
            {
                id: "rusak",
                title: "Damaged Passport Replacement",
                desc: "Procedure if passport is damaged",
                detail: [
                    "Damaged Old Passport",
                    "Report to Immigration Office bringing original requirement documents",
                    "BAP Process by Officer",
                    "Approval from the Head of Office/Immigration Official",
                    "Photo and Biometric Process",
                    "Approval from the Director General of Immigration",
                    "Passport Issuance",
                    "Officer contacts applicant when passport is ready for collection"
                ],
            },
            {
                id: "rusak-kahar",
                title: "Force Majeure Damaged Passport Replacement",
                desc: "Procedure if passport is damaged due to force majeure",
                detail: [
                    "Damaged Old Passport",
                    "Force Majeure Incident Certificate from local Sub-District Head",
                    "Report to Immigration Office bringing original requirement documents",
                    "BAP Process by Officer",
                    "Approval from the Head of Office/Immigration Official",
                    "Photo and Biometric Process",
                    "Approval from the Director General of Immigration",
                    "Passport Issuance",
                    "Officer contacts applicant when passport is ready for collection"
                ],
            },
            {
                id: "perubahan-data",
                title: "Data Change",
                desc: "Name, address, or other data changed",
                detail: [
                    "Old Passport",
                    "Court Decree Letter regarding Data Change",
                    "Report to Immigration Office bringing original requirement documents",
                    "BAP Process by Officer",
                    "Approval from the Head of Office/Immigration Official",
                    "Photo and Biometric Process",
                    { title: "Approval from the Director General of Immigration", note: "Estimated time cannot be determined", italicNote: true },
                    "Passport Issuance",
                    "Officer contacts applicant when passport is ready for collection"
                ],
            },
        ],
    },
    {
        id: "persyaratan-pekerja-studi",
        title: "Passport Requirements for Work & Study",
        desc: "Documents required for work and study",
        iconSrc: iconPekerjaStudi,
        children: []
    },
    {
        id: "pengajuan-online",
        title: "How to apply online for Lost/damaged passport",
        desc: "Online passport application guide",
        iconSrc: iconOnlineHilang,
        children: [
            {
                id: "ketentuan-bap",
                title: "Provisions for Damaged/Lost/Data Change Passports",
                desc: "Provisions regarding damaged, lost, or data change passports",
                detail: [
                    { title: "DAMAGED PASSPORT", note: "A damaged passport includes being torn, perforated, scribbled on, wet, or folded." },
                    { title: "LOST PASSPORT", note: "Loss of a passport can occur due to negligence in keeping or storing the passport, or due to events beyond the passport holder's control." },
                    { title: "PASSPORT DATA DIFFERENCES", note: "Differences in data include names, places or dates of birth, gender, or other data that does not match supporting documents." }
                ]
            },
            {
                id: "cara-pengajuan-bap-online",
                title: "How to Apply for BAP Online",
                desc: "Guide on how to apply for BAP online",
                detail: [
                    { isImage: true, src: qrcodeImg }
                ]
            }
        ]
    },
    {
        id: "tutorial-mpaspor",
        title: "M-Paspor Registration Tutorial",
        desc: "Only valid for new passport applications and replacement of expired passports",
        iconSrc: iconTutorial,
        children: [
            {
                id: "tutorial-pembuatan-akun",
                title: "Account Creation",
                desc: "M-Paspor account creation tutorial",
                detail: [
                    { isVideo: true, src: "https://drive.google.com/file/d/1tHPV0SY-VLlCYvavEg1j6Ly0sIHwn3kV/view?usp=sharing" }
                ]
            },
            {
                id: "tutorial-langkah",
                title: "Registration Steps",
                desc: "Registration steps in the M-Paspor application",
                detail: [
                    { isVideo: true, src: "" }
                ]
            },
            {
                id: "tutorial-reschedule",
                title: "Application Reschedule",
                desc: "Application reschedule provisions",
                detail: [
                    "Applicants can apply for an application reschedule with the following conditions:",
                    "Reschedule is only for paid applications",
                    "Applicants cannot reschedule on the same date as the initial application",
                    "Maximum 1 reschedule and only within 30 days from the initial application date"
                ]
            }
        ]
    },
    {
        id: "pengambilan",
        title: "Passport Collection Requirements",
        desc: "Conditions when collecting passport",
        iconSrc: iconPengambilan,
        children: [
            {
                id: "pemohon",
                title: "Applicant",
                desc: "Collection by the applicant",
                detail: [
                    "Payment Receipt",
                    "ID Card (KTP)",
                ],
            },
            {
                id: "dalam-1-kk",
                title: "Family Member in Same Household",
                desc: "Collection by family member in same family card",
                detail: [
                    "Payment Receipt",
                    "ID Card (KTP)",
                    "Photocopy of Family Card",
                ],
            },
            {
                id: "tidak-dalam-1-kk",
                title: "Non-Family Member",
                desc: "Collection by someone outside the family card",
                detail: [
                    "Payment Receipt",
                    "ID Card (KTP)",
                    "Photocopy of Family Card",
                    "Power of Attorney with Rp. 10,000 Stamp Duty",
                ],
            },
        ],
    },
];
