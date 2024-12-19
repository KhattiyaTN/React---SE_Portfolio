import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ErrIndex from './pages/error/ErrIndex'
import LoginIndex from './pages/login/LoginIndex'
import TableIndex from './pages/table/TableIndex'
import ProfileIndex from './pages/profile/ProfileIndex'
import BadgesIndex from './pages/form/badges/BadgesIndex'
import ClassProjectIndex from './pages/form/projects/ClassProjectIndex'
import CertificatesIndex from './pages/form/certificates/CertificatesIndex'
import ClassProjectInfoIndex from './pages/information/projects/ClassProjectInfoIndex'
import BadgesInfoIndex from './pages/information/badges/BadgesInfoIndex'
import CertificateInfoIndex from './pages/information/certificates/CertificateInfoIndex'

const App = () => {
    return (
        <Router>
            <Routes>
                {/* Default */}
                <Route path="*" element={<ErrIndex />} />
                <Route path="/login" element={<LoginIndex />} />

                {/* Profile */}
                <Route path="/profile" element={<ProfileIndex />} />

                {/* Table */}
                <Route path="/table" element={<TableIndex />} />

                {/* Forms */}
                <Route path="/form/class" element={<ClassProjectIndex />} />
                <Route path="/form/badge" element={<BadgesIndex />} />
                <Route path="/form/certificate" element={<CertificatesIndex />} />

                {/* Information */}
                <Route path="/info/class" element={<ClassProjectInfoIndex />} />
                <Route path="/info/badge" element={<BadgesInfoIndex />} />
                <Route path="/info/certificate" element={<CertificateInfoIndex />} />
            </Routes>
        </Router>
    )
}

export default App